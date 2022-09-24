import select from 'select-dom'

export const ClickModalInactiveCheck = parent => {
  const resumeButton = select('button[ng-click="refresh()"]', parent)

  if (resumeButton) {
    resumeButton.click()
  }
}

export default ClickModalInactiveCheck
