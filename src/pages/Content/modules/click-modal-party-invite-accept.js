import select from 'select-dom'

export const ClickModalPartyInviteAccept = parent => {
  const acceptButton = select.all(
    'button',
    parent
  )[2]

  if (acceptButton) {
    acceptButton.click()
  }
}

export default ClickModalPartyInviteAccept
