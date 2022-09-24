import select from 'select-dom'

export const ClickModalMatchReady = parent => {
  // Quickmatch
  let acceptButton = select(
    'button[ng-click="close()"][translate-once="ACCEPT"]:not([disabled]',
    parent
  )

  // Hubs
  if (!acceptButton) {
    acceptButton = select(
      'button[ng-click="vm.checkInMatch.checkingIn()"]',
      parent
    )
  }

  if (acceptButton) {
    acceptButton.click()
  }
}

export default ClickModalMatchReady
