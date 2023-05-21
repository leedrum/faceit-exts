/** @jsx h */
import { h } from 'dom-chef'
import select from 'select-dom'
import {
  hasFeatureAttribute,
  setFeatureAttribute
} from '../../../../helpers/dom-element'
import { getPlayer, getPlayerStats } from '../../../../helpers/faceit-api'
import {
  getPlayerProfileNickname,
  getPlayerProfileStatsGame
} from '../../../../helpers/player-profile'
import createSectionTitleElement from '../../../../components/section-title'
import createKeyStatElement from '../../../../components/key-stat'
import createHrElement from '../../../../components/hr'

const FEATURE_ATTRIBUTE = 'extended-stats'

export const PlayerProfileExtendedStats = async parentElement => {
  const playerProfileParasiteElement = select(
    'parasite-player-profile-content',
    parentElement
  )

  if (!playerProfileParasiteElement) {
    return
  }

  const playerProfileElement = select(
    '#__next > div',
    playerProfileParasiteElement.shadowRoot
  )

  if (
    !playerProfileElement ||
    hasFeatureAttribute(FEATURE_ATTRIBUTE, playerProfileElement)
  ) {
    return
  }
  setFeatureAttribute(FEATURE_ATTRIBUTE, playerProfileElement)

  const nickname = getPlayerProfileNickname()
  const game = getPlayerProfileStatsGame()
  const { infractions = {}, ...player } = await getPlayer(nickname)

  const { afk = 0, leaver = 0 } = infractions

  const playerStats = await getPlayerStats(player.id, game)

  if (!playerStats) {
    return
  }

  const {
    winRate,
    averageKills,
    averageHeadshots,
    averageKDRatio,
    averageKRRatio
  } = playerStats

  const statsElement = (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', gap: 16 }}>
        <div style={{ flex: 2 }}>
          {createSectionTitleElement({ title: 'Last 20 Matches Statistics' })}
          <div style={{ display: 'flex', gap: 14 }}>
            {createKeyStatElement({
              key: 'Elo',
              stat: player.games.csgo.faceitElo
            })}
            {createKeyStatElement({
              key: 'WIN RATE %',
              stat: winRate
            })}
            {createKeyStatElement({
              key: 'Average Kills',
              stat: averageKills
            })}
            {createKeyStatElement({
              key: 'Average Headshots %',
              stat: averageHeadshots
            })}
            {createKeyStatElement({
              key: 'Average K/D',
              stat: averageKDRatio
            })}
            {createKeyStatElement({
              key: 'Average K/R',
              stat: averageKRRatio
            })}
          </div>
          <div />
        </div>
        <div style={{ flex: 1 }}>
          {createSectionTitleElement({ title: 'Other Statistics' })}
          <div style={{ display: 'flex', gap: 16 }}>
            {createKeyStatElement({
              key: 'AFK Times',
              stat: afk
            })}
            {createKeyStatElement({
              key: 'Leave Times',
              stat: leaver
            })}
          </div>
        </div>
      </div>
    </div>
  )

  const gamePreferencesElement = playerProfileElement.children[6]

  playerProfileElement.insertBefore(statsElement, gamePreferencesElement)

  playerProfileElement.insertBefore(createHrElement(), gamePreferencesElement)
}

export default PlayerProfileExtendedStats
