/** @jsx h */
import { h } from 'dom-chef'
import select from 'select-dom'

import {
  hasFeatureAttribute,
  setFeatureAttribute
} from '../../../../helpers/dom-element'

import createPlayerBansElement from '../../../../components/player-ban'
import { getPlayerProfileNickname } from '../../../../helpers/player-profile'
import { getPlayer, getPlayerBans } from '../../../../helpers/faceit-api'

const FEATURE_ATTRIBUTE = 'profile-bans'

export const PlayerProfileBan = async parentElement => {
  const banElement = select('profile-overview-bans', parentElement)

  if (banElement === null || banElement === undefined) {
    return
  }

  if (hasFeatureAttribute(FEATURE_ATTRIBUTE, banElement)) {
    return
  }

  setFeatureAttribute(FEATURE_ATTRIBUTE, banElement)

  const headerElement = (
    <h3 className="heading-border">
      <span translate="BANS">Bans</span>
    </h3>
  )

  const noBanElement = <div>No match bans yet</div>

  const nickname = getPlayerProfileNickname()
  const { id } = await getPlayer(nickname)

  const playerBans = await getPlayerBans(id)

  if (playerBans.length === 0) {
    banElement.append(noBanElement)
  }

  playerBans.forEach(ban => {
    const playerBansElement = createPlayerBansElement(ban)

    const banWrapper = <div className="mb-sm">{playerBansElement}</div>

    banElement.append(banWrapper)
  })

  const headerElementMissing = select('h3.heading-border', parentElement)
  if (headerElementMissing === undefined) {
    banElement.insertBefore(headerElement, banElement.firstChild)
  }
}

export default PlayerProfileBan
