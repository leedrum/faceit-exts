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
  let parasiteContainer = parentElement.querySelector('#parasite-container')
  let listContentGrid = null
  if (parasiteContainer) {
    listContentGrid = parasiteContainer
  } else {
    listContentGrid = parentElement
  }
  listContentGrid = listContentGrid.querySelector('#content-grid-element-8')
  if (listContentGrid === null || listContentGrid === undefined) {
    return
  }

  if (hasFeatureAttribute(FEATURE_ATTRIBUTE, listContentGrid)) {
    return
  }

  const divClass = listContentGrid.className
  const headingClass = listContentGrid.querySelector('h5').className
  const spanClass = listContentGrid.lastElementChild.className
  setFeatureAttribute(FEATURE_ATTRIBUTE, listContentGrid)
  listContentGrid = listContentGrid.parentElement

  const anchorElement = (
    <div></div>
  )

  const headerElement = (
    <div className={divClass}>
      <h3 className="heading-border">
        <span translate="BANS">Bans</span>
      </h3>
    </div>
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
    listContentGrid.append(noBanElement)
  }

  const headerElementMissing = select('h3.heading-border', parentElement)
  if (headerElementMissing === undefined) {
    listContentGrid.append(headerElement)
  }

  playerBans.forEach(ban => {
    const playerBansElement = createPlayerBansElement(ban)

    const banWrapper = <div className={divClass} style={{color: 'red'}}>{playerBansElement}</div>

    listContentGrid.append(banWrapper)
  })
}

export default PlayerProfileBan
