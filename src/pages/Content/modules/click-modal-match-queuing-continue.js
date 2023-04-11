import select from 'select-dom'

export const ClickModalMatchQueuingContinue = parent => {
  const continueButton = select(
    'button[ng-click="vm.close()"][translate-once="CONTINUE"]',
    parent
  )

  if (continueButton) {
    continueButton.click()
  }
}

export default ClickModalMatchQueuingContinue
