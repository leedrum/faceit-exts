import select from 'select-dom'

export const ClickModalMatchRoomCaptainOk = parent => {
  const okButton = select(
    'button[ng-click="close()"][translate-once="OK"]',
    parent
  )

  if (okButton) {
    okButton.click()
  }
}

export default ClickModalMatchRoomCaptainOk
