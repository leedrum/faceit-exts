import { Box, Divider, Grid } from '@mui/material';
import React from 'react';

export const Row =  props => {

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}  alignItems={'center'} justifyContent={'left'}>
          {props.children}
        </Grid>
      </Box>
      <Divider/>
    </React.Fragment>
  )
}

export default Row;
