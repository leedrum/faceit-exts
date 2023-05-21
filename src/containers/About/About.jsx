import { Grid, Typography } from '@mui/material';
import React from 'react';
import Row from '../Row/Row';

export const AboutComponent = () => {
  return (
    <React.Fragment>
      <Row>
        <Grid item xs={12}>
          <Typography component={'p'}>
            Add many features to let you tryhard FaceIT
          </Typography>
        </Grid>
      </Row>
      <Row>
        <Grid item xs={12}>
          <Typography component={'p'}>
            Author: <a href="https://github.com/leedrum/faceit-exts" target={'_blank'} rel="noreferrer" className="github-link">@leedrum</a>
          </Typography>
        </Grid>
      </Row>
      <Row>
        <Grid item xs={12}>
          <Typography component={'p'}>
            Version: 1.1.8
          </Typography>
        </Grid>
      </Row>
    </React.Fragment>
  )
}

export default AboutComponent;
