import { getRoomId } from '../../../helpers/match-room'
import {
  hasFeatureAttribute,
  setFeatureAttribute
} from '../../../helpers/dom-element'
import { getSelf } from '../../../helpers/faceit-api'
import { getSetting } from '../../../helpers/settings'

const FEATURE_ATTRIBUTE = 'connect-to-server'
const DELAY = 5000
const store = new Map()

export const ClickMatchRoomCopyServerData = async () => {
  const copyServerElement = document.getElementById("parasite-container").shadowRoot.querySelectorAll('button')[2]

  if (!copyServerElement) {
    return
  }

  if (copyServerElement.textContent !== "Copy") {
    return
  }

  const self = await getSelf()
  const roomId = getRoomId()

  if (store.has(roomId)) {
    return
  }

  const isSelfInMatch = document.getElementById("parasite-container").shadowRoot.textContent.indexOf(self.nickname) > -1

  if (!isSelfInMatch) {
    return
  }

  if (hasFeatureAttribute(FEATURE_ATTRIBUTE, copyServerElement)) {
    return
  }

  setFeatureAttribute(FEATURE_ATTRIBUTE, copyServerElement)

  const matchRoomLastConnectToServer = await getSetting("matchRoomLastConnectToServer")

  if (matchRoomLastConnectToServer === roomId) {
    return
  }

  store.set(roomId, true)

  setTimeout(() => {
    copyServerElement.click()
  }, DELAY)
}

export default ClickMatchRoomCopyServerData
