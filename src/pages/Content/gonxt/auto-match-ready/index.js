import select from 'select-dom'
import {
  hasFeatureAttribute,
  setFeatureAttribute
} from '../../../../helpers/dom-element'

const FEATURE_ATTRIBUTE = 'gonxt-accept-match-ready'

export const GonxtClickMatchReady = parent => {
  const acceptButton = select.all(
    'p',
    parent
  )[0]

  if (acceptButton) {} else { return }

  if (hasFeatureAttribute(FEATURE_ATTRIBUTE, acceptButton)) {
    return
  }

  setFeatureAttribute(FEATURE_ATTRIBUTE, acceptButton)
  acceptButton.click()
}

export default GonxtClickMatchReady
