export const isEnabledSetting = key => {
  return window.localStorage.getItem(key) === "on"
}

export const toggleSetting = key => {
  if (window.localStorage.getItem(key) === "on") {
    window.localStorage.setItem(key, 'off')
  } else {
    window.localStorage.setItem(key, 'on')
  }
}

export const runIfEnableSetting = async (option, feature, parent) => {
  const featureEnabled = await isEnabledSetting(option)

  if (featureEnabled) {
    return feature(parent)
  }
}

export const InitSetting = () => {
  return {
    matchQueueAutoReady: false,
    matchRoomAutoVetoLocations: false,
    matchRoomAutoVetoMaps: false,
    modalCloseMatchVictory: false,
    modalCloseMatchDefeat: false,
    modalCloseGlobalRankingUpdate: false,
    modalClickInactiveCheck: false,
    matchRoomAutoCopyServerData: false,
    matchRoomAutoConnectToServer: false,
    matchRoomCaptainOK: false
  }
}
