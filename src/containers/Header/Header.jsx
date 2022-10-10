import React from 'react';
import Grid from '@mui/material/Grid';
import LogoExtComponent from '../../containers/LogoExts/LogoExts';
import { Box, Typography } from '@mui/material';

export const HeaderComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}  alignItems={'center'} justifyContent={'center'}>
        <Grid item xs={2}>
          <LogoExtComponent/>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5" component="h1">Faceit Exts</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeaderComponent;
