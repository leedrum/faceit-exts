export const ClickModalMatchReady = parent => {
  // Quickmatch
  // let acceptButton = select(
  //   'button[ng-click="close()"][translate-once="ACCEPT"]:not([disabled]',
  //   parent
  // )

  // // Hubs
  // if (!acceptButton) {
  //   acceptButton = select(
  //     'button[ng-click="vm.checkInMatch.checkingIn()"]',
  //     parent
  //   )
  // }

  // if (acceptButton) {
  //   acceptButton.click()
  // }

  const buttons = parent.querySelectorAll('button')
  buttons.forEach((button, _index) => {
    if (button.textContent == 'Accept' || button.textContent == 'ACCEPT' || button.textContent == 'Chấp nhận' || button.textContent == 'CHẤP NHẬN') {
      button.click()
    }
  })
}

export default ClickModalMatchReady
