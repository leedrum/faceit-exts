import OptionsSync from 'webext-options-sync'

export const optionsStorage = new OptionsSync()

export const saveSetting = async (options) => {
  await optionsStorage.set(options)
}

export const getSetting = async (key) => {
  const options = await optionsStorage.getAll()
  return options[key]
}

export const isEnabledSetting = async key => {
  return await getSetting(key) === "on"
}

export const toggleSetting = async key => {
  const options = await optionsStorage.getAll()

  const value = options[key]
  if (value === "on") {
    options[`${key}`] = "off"
    await optionsStorage.set(options)
  } else {
    options[`${key}`] = "on"
    await optionsStorage.set(options)
  }
}

export const runIfEnableSetting = async (option, feature, parent) => {
  const featureEnabled = await isEnabledSetting(option)

  if (featureEnabled === true) {
    return feature(parent)
  }
}

export const InitSetting = () => {
  return {
    matchQueueAutoReady: false,
    partyAutoAcceptInvite: false,
    matchRoomAutoVetoLocations: false,
    matchRoomAutoVetoMaps: false,
    mapsVeto: [],
    modalCloseMatchVictory: false,
    modalCloseMatchDefeat: false,
    modalCloseGlobalRankingUpdate: false,
    modalClickInactiveCheck: false,
    matchRoomAutoCopyServerData: false,
    matchRoomAutoConnectToServer: false,
    matchRoomCaptainOK: false
  }
}
