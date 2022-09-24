import select from 'select-dom'
import debounce from 'lodash/debounce'
import * as modals from '../../helpers/modals'
import * as pages from '../../helpers/pages'
import { matchRoomIsReady } from '../../helpers/match-room'
import FeatureHeaderLevelProgress from './modules/header-level-progress'
import ClickModalPartyInviteAccept from './modules/click-modal-party-invite-accept'
import ClickModalMatchQueuingContinue from './modules/click-modal-match-queuing-continue'
import ClickModalMatchRoomCaptainOk from './modules/click-modal-match-room-captain-ok'
import ClickModalMatchReady from './modules/click-modal-match-ready'
import ClickModalClose from './modules/click-modal-close'
import ClickModalInactiveCheck from './modules/click-modal-inactive-check'
import { MatchRoomEloEstmation } from './modules/match-room-elo-estimation'
import PlayerProfileBan from './modules/player-profile-ban'
import PlayerProfileMatchesElo from './modules/player-profile-matches-elo'
import PlayerProfileMatchesDemo from './modules/add-player-profile-matches-demo'
// import PlayerProfileExtendedStats from './modules/player-profile-extended-stats'

const debouncedPlayerProfileStatsFeatures = debounce(async parentElement => {
  // addPlayerProfileLevelProgress(parentElement)
  await PlayerProfileMatchesDemo(parentElement)
  await PlayerProfileMatchesElo(parentElement)
  // await PlayerProfileExtendedStats(parentElement)
}, 200)

function observeBody() {
  const observer = new MutationObserver(mutationList => {
    const modalContainer = select('#parasite-modal-container').shadowRoot
    if (modalContainer) {
      const reactModals = modalContainer.querySelectorAll(
        '.ReactModal__Content'
      )

      reactModals.forEach(modal => {
        if (modal.querySelector('h5')) {
          if (modals.isInviteToParty(modal)) {
            ClickModalPartyInviteAccept(modal)
          }
        }
      })
    }

    const modalElement = select('.modal-dialog')

    if (modalElement) {
      if (modals.isMatchQueuing(modalElement)) {
        ClickModalMatchQueuingContinue(modalElement)
      } else if (modals.isMatchReady(modalElement)) {
        ClickModalMatchReady(modalElement)
      } else if (modals.isMatchRoomCaptain(modalElement)) {
        ClickModalMatchRoomCaptainOk(modalElement)
        console.log('isMatchRoomCaptain')
      } else if (modals.isMatchVictory(modalElement)) {
        ClickModalClose(modalElement)
      } else if (modals.isMatchDefeat(modalElement)) {
        ClickModalClose(modalElement)
      } else if (modals.isGlobalRankingUpdate(modalElement)) {
        ClickModalClose(modalElement)
      } else if (modals.isInactive(modalElement)) {
        ClickModalInactiveCheck(modalElement)
      } else if (modals.isPlayerProfile()) {
        // addPlayerProfileBadge(modalElement)
        // addPlayerProfileLinks(modalElement)
        // addPlayerProfileBan(modalElement)

        if (modals.isPlayerProfileStats()) {
          debouncedPlayerProfileStatsFeatures(modalElement)
        }
      }
    }

    FeatureHeaderLevelProgress()

    const mainContentElement = select('#main-content')

    if (mainContentElement) {
      if (pages.isRoomOverview() && matchRoomIsReady()) {

        MatchRoomEloEstmation(mainContentElement)
      } else if (pages.isPlayerProfile()) {
        // addPlayerProfileBadge(mainContentElement)
        PlayerProfileBan(mainContentElement)
        // addPlayerProfileLinks(mainContentElement)

        if (pages.isPlayerProfileStats()) {
          debouncedPlayerProfileStatsFeatures(mainContentElement)
        }
      } else if (pages.isTeamsOverview()) {
        console.log('TeamsOverview')
      }
    }

    for (const mutation of mutationList) {
      for (const addedNode of mutation.addedNodes) {
        if (addedNode.shadowRoot) {
          observer.observe(addedNode.shadowRoot, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['aria-hidden']
          })
        }
      }
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['aria-hidden']
  })
}

;(async () => {
  observeBody()
})()
