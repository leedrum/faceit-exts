import React from 'react';
import RowSettingComponent from '../RowSetting/RowSetting';

export const AutomationComponent = () => {
  return (
    <React.Fragment>
      <RowSettingComponent name="Match Queue Auto Ready" keySetting="matchQueueAutoReady"/>
      <RowSettingComponent name="Match Accept Invite" keySetting="partyAutoAcceptInvite"/>
      <RowSettingComponent name="Close match vicotry" keySetting="modalCloseMatchVictory"/>
      <RowSettingComponent name="Close match defeat" keySetting="modalCloseMatchDefeat"/>
      <RowSettingComponent name="Close global ranking update" keySetting="modalCloseGlobalRankingUpdate"/>
      <RowSettingComponent name="Close inactive check" keySetting="modalClickInactiveCheck"/>
      <RowSettingComponent name="Close 'OK' Room Captain" keySetting="matchRoomCaptainOK"/>
      <RowSettingComponent name="Auto copy Server data" keySetting="matchRoomAutoCopyServerData"/>
      <RowSettingComponent name="Auto connect to Server" keySetting="matchRoomAutoConnectToServer"/>
    </React.Fragment>
  )
}

export default AutomationComponent;
