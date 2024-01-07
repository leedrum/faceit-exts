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
  // const banElement = select('profile-overview-bans', parentElement)
  let aboutElement = parentElement.querySelector('#parasite-container').querySelector('#content-grid-element-5')

  if (aboutElement === null || aboutElement === undefined) {
    return
  }

  if (hasFeatureAttribute(FEATURE_ATTRIBUTE, aboutElement)) {
    return
  }
  const divClass = aboutElement.className
  const headingClass = aboutElement.querySelector('h5').className
  const spanClass = aboutElement.lastElementChild.className
  setFeatureAttribute(FEATURE_ATTRIBUTE, aboutElement)
  aboutElement = aboutElement.parentElement

  const headerElement = (
    <h3 className="heading-border">
      <span translate="BANS">Bans</span>
    </h3>
  )

  const noBanElement = (
    <div className={divClass}>
      <h5 className={headingClass}>
        <span translate="BANS">Bans</span>
      </h5>
      <span translate="No match bans yet" className={spanClass}>No match bans yet</span>
    </div>
  )

  const nickname = getPlayerProfileNickname()
  const { id } = await getPlayer(nickname)

  const playerBans = await getPlayerBans(id)

  if (playerBans.length === 0) {
    aboutElement.append(noBanElement)
  }

  playerBans.forEach(ban => {
    const playerBansElement = createPlayerBansElement(ban)

    const banWrapper = <div className={divClass}>{playerBansElement}</div>

    aboutElement.append(banWrapper)
  })

  const headerElementMissing = select('h3.heading-border', parentElement)
  if (headerElementMissing === undefined) {
    aboutElement.insertBefore(headerElement, aboutElement.firstChild)
  }
}

export default PlayerProfileBan
