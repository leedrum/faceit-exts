import React from 'react';
import Grid from '@mui/material/Grid';
import LogoExtComponent from '../../containers/LogoExts/LogoExts';

export const HeaderComponent = () => {
  return (
    <Grid container spacing={2}  alignItems={'center'} justifyContent={'center'}>
      <Grid item xs={2}>
        <LogoExtComponent/>
      </Grid>
      <Grid item xs={10}>
        Faceit Exts
      </Grid>
    </Grid>
  )
}

export default HeaderComponent;
