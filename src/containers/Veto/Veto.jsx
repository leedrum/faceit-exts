import { Grid, Paper } from '@mui/material';
import React from 'react';
import RowSettingComponent from '../RowSetting/RowSetting';
import Row from '../Row/Row';
import DraggableList from './DraggableList'
import { getMaps, reorder } from './helpers';
import "./style.scss"
import { saveSetting } from '../../helpers/settings'

export const Veto = () => {
  const [maps, setMaps] = React.useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    setMaps(await getMaps())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onDragEnd = async ({ destination, source }) => {
    // dropped outside the list
    if (!destination) return;

    const newMaps = reorder(maps, source.index, destination.index)
    setMaps(newMaps)
    await saveSetting({mapsVeto: newMaps.map(m => m.name)})
  };

  return (
    <React.Fragment>
      <RowSettingComponent name="Match Room Auto Veto Maps" keySetting="matchRoomAutoVetoMaps"/>
      <Grid container>
        <Row>
          <Grid item xs={12}>
          <Paper className="flexPaper">
            {maps && <DraggableList items={maps} onDragEnd={onDragEnd} />}
          </Paper>
          </Grid>
        </Row>
      </Grid>
    </React.Fragment>
  )
}

export default Veto;
