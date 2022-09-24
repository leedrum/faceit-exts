import select from 'select-dom'

export const ClickModalClose = parent => {
  const closeButton = select('button[ng-click="cancel()"]', parent)

  if (closeButton) {
    closeButton.click()
  }
}

export default ClickModalClose
