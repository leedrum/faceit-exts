import { Grid, Typography } from '@mui/material';
import React from 'react';
import Row from '../Row/Row';

export const NotificationComponent = () => {
  return (
    <React.Fragment>
      <Row>
        <Grid item xs={12}>
          <Typography component={'p'}>Notification</Typography>
        </Grid>
      </Row>
    </React.Fragment>
  )
}

export default NotificationComponent;
