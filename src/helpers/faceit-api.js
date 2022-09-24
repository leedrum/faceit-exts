import pMemoize from 'p-memoize'
import camelcaseKeys from 'camelcase-keys'
import * as dateFns from 'date-fns'
import Cookies from 'js-cookie'
import { mapTotalStatsMemoized, mapAverageStatsMemoized } from './stats'
import pRetry from 'p-retry'

export const CACHE_TIME = 600000


const BASE_URL = 'https://api.faceit.com'

export const faceitApii = async (path, options) => {
  const response = await pRetry(
    () =>
      fetch(`${BASE_URL}${path}`, options).then(res => {
        if (res.status === 404) {
          throw new pRetry.AbortError(res.statusText)
        } else if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res
      }),
    {
      retries: 3
    }
  )

  const json = await response.json()

  return json
}


async function fetchApi(path) {
  if (typeof path !== 'string') {
    throw new TypeError(`Expected \`path\` to be a string, got ${typeof path}`)
  }

  try {
    const token = Cookies.get('t') || localStorage.getItem('token')
    const options = { headers: {} }

    if (token) {
      options.headers.Authorization = `Bearer ${token}`
    }

    const response = await faceitApii(path, options)
    if (!response) return null
    const {
      code, // Status for new API(?)
      payload
    } = response
    if (code && code.toUpperCase() !== 'OPERATION-OK') {
      throw new Error(response)
    }

    return camelcaseKeys(payload || response, { deep: true })
  } catch (err) {
    console.error(err)

    return null
  }
}

const fetchApiMemoized = pMemoize(fetchApi, {
  maxAge: CACHE_TIME
})

export const getUser = userId => fetchApiMemoized(`/users/v1/users/${userId}`)

export const getPlayer = nickname =>
  fetchApiMemoized(`/users/v1/nicknames/${nickname}`)

export const getPlayerMatches = (userId, game, size = 20) =>
  fetchApiMemoized(
    `/stats/v1/stats/time/users/${userId}/games/${game}?size=${size}`
  )

export const getPlayerStats = async (userId, game, size = 20) => {
  if (game !== 'csgo') {
    return false
  }

  let totalStats = await fetchApiMemoized(
    `/stats/v1/stats/users/${userId}/games/${game}`
  )

  if (!totalStats || Object.keys(totalStats).length === 0) {
    return null
  }

  totalStats = mapTotalStatsMemoized(totalStats.lifetime)

  let averageStats = await fetchApiMemoized(
    `/stats/v1/stats/time/users/${userId}/games/${game}?size=${size}`
  )

  if (!averageStats || !Array.isArray(averageStats)) {
    return null
  }

  averageStats = averageStats.filter(stats => stats.gameMode.includes('5v5'))

  if (averageStats.length <= 1) {
    return null
  }

  averageStats = mapAverageStatsMemoized(averageStats)

  return {
    ...totalStats,
    ...averageStats
  }
}

export const getQuickMatch = matchId =>
  fetchApiMemoized(`/match/v2/matches/${matchId}?withStats=true`)

export const getMatch = matchId =>
  fetchApiMemoized(`/match/v2/match/${matchId}`)

export const getTeam = teamId => fetchApiMemoized(`/teams/v1/teams/${teamId}`)

export const getSelf = () => fetchApiMemoized('/users/v1/sessions/me')

export const getHubQueue = async id =>
  (await fetchApi(`/queue/v1/queue/hub/${id}`))[0]

export const getPlayerHistory = async (userId, page = 0) => {
  const size = 50
  const offset = 0
  const from = encodeURIComponent(`1970-01-01T01:00:00+0000`)
  const to = encodeURIComponent(
    dateFns.format(new Date(), `yyyy-MM-dd'T'HH:mm:ss'+0000'`)
  )

  return fetchApiMemoized(
    `/match-history/v5/players/${userId}/history/?from=${from}&to=${to}&page=${page}&size=${size}&offset=${offset}`
  )
}

export const getMatchmakingQueue = queueId =>
  fetchApiMemoized(`/queue/v1/queue/matchmaking/${queueId}`)

export const getPlayerBans = userId => {
  const limit = 20
  const offset = 0

  return fetchApiMemoized(
    `/queue/v1/ban?userId=${userId}&organizerId=faceit&offset=${offset}&limit=${limit}`
  )
}
