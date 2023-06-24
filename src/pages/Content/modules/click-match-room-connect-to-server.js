import { getRoomId } from '../../../helpers/match-room'
import {
  hasFeatureAttribute,
  setFeatureAttribute
} from '../../../helpers/dom-element'
import { getSelf } from '../../../helpers/faceit-api'
import { getSetting, saveSetting } from '../../../helpers/settings'

const FEATURE_ATTRIBUTE = 'connect-to-server'
const DELAY = 5000

export const ClickMatchRoomConnectToServer = async () => {
  const goToServerElement = document.getElementById("parasite-container").querySelectorAll('[rel="noopener noreferrer"]')[0]

  if (!goToServerElement) {
    return
  }

  if (goToServerElement.textContent !== "Connect") {
    return
  }

  const self = await getSelf()
  const roomId = getRoomId()
  const isSelfInMatch = document.getElementById("parasite-container").shadowRoot.textContent.indexOf(self.nickname) > -1

  if (!isSelfInMatch) {
    return
  }

  if (hasFeatureAttribute(FEATURE_ATTRIBUTE, goToServerElement)) {
    return
  }

  setFeatureAttribute(FEATURE_ATTRIBUTE, goToServerElement)

  const matchRoomLastConnectToServer = await getSetting("matchRoomLastConnectToServer")

  if (matchRoomLastConnectToServer === roomId) {
    return
  }

  await saveSetting({ matchRoomLastConnectToServer: roomId })

  setTimeout(() => {
    goToServerElement.click()
  }, DELAY)
}

export default ClickMatchRoomConnectToServer
