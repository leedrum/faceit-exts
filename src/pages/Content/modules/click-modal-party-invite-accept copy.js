import select from 'select-dom'

export const ClickModalPartyInviteAccept = parent => {
  const acceptButton = select(
    'button[class="sc-clsHhM gYYSzb sc-fbkhIv hTGgtk"]',
    parent
  )

  if (acceptButton) {
    acceptButton.click()
  }
}

export default ClickModalPartyInviteAccept
