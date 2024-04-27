/** @jsx h */
import { h } from 'dom-chef'
import select from 'select-dom'
import { getPlayer, getPlayerMatches } from '../../../../helpers/faceit-api'
import { getEloChangesByMatches } from '../../../../helpers/elo'
import {
  getPlayerProfileNickname,
  getPlayerProfileStatsGame
} from '../../../../helpers/player-profile'
import {
  hasFeatureAttribute,
  setFeatureAttribute
} from '../../../../helpers/dom-element'

const FEATURE_ATTRIBUTE = 'matches-elo'

export const PlayerProfileMatchesElo = async parentElement => {
  const playerProfileParasiteElement = select(
    '#parasite-container',
    parentElement
  )

  if (!playerProfileParasiteElement) {
    return
  }

  const playerProfileElement = select.all(
    '#content-grid-element-0',
    playerProfileParasiteElement
  )[0]

  const matchElements = select.all('table > tbody > tr', playerProfileElement)

  matchElements.shift()

  if (
    !playerProfileElement ||
    matchElements.length === 0 ||
    hasFeatureAttribute(FEATURE_ATTRIBUTE, playerProfileElement)
  ) {
    return
  }
  setFeatureAttribute(FEATURE_ATTRIBUTE, playerProfileElement)

  const nickname = getPlayerProfileNickname()
  const game = getPlayerProfileStatsGame()
  const player = await getPlayer(nickname)

  const matches = await getPlayerMatches(
    player.id,
    game,
    matchElements.length + 1
  )
  const eloChangesByMatches = await getEloChangesByMatches(matches, game)

  if (!eloChangesByMatches) {
    return
  }

  matchElements.forEach((matchElement, i) => {
    const scoreElement = select('td:nth-child(4) span', matchElement)
    const mapElement = select('td:nth-child(5) span', matchElement)

    const match = matches[i]

    if (
      !match ||
      match.i18 !== scoreElement.textContent.trim() ||
      !match.i1.includes(mapElement.textContent.trim().toLowerCase())
    ) {
      return
    }

    const eloChange = eloChangesByMatches[match.matchId]
    console.log('eloChange', eloChange)
    if (!eloChange) {
      return
    }

    const { eloDiff, newElo } = eloChange
    console.log('eloDiff', eloDiff)
    if (!eloDiff) {
      return
    }

    const resultElement = select('td:nth-child(3) span', matchElement)
    console.log('resultElement', resultElement)
    resultElement.textContent += ` (${eloDiff >= 0 ? '+' : ''}${eloDiff})`

    const newEloElement = (
      <div
        style={{
          color: '#fff',
          fontWeight: 'normal',
          textTransform: 'none'
        }}
      >
        New Elo: {newElo}
      </div>
    )

    resultElement.append(newEloElement)
  })
}

export default PlayerProfileMatchesElo
