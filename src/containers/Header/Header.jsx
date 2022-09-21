import React from 'react';
import Grid from '@mui/material/Grid';
import LogoExtComponent from '../../containers/LogoExts/LogoExts';
import { Typography } from '@mui/material';

export const HeaderComponent = () => {
  return (
    <Grid container spacing={2}  alignItems={'center'} justifyContent={'center'}>
      <Grid item xs={2}>
        <LogoExtComponent/>
      </Grid>
      <Grid item xs={10}>
      <Typography variant="h4" component="h1">Faceit Exts</Typography>
      </Grid>
    </Grid>
  )
}

export default HeaderComponent;
