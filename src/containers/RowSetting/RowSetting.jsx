import { Divider, Grid, Switch } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Row from '../Row/Row';
import { useEffect } from 'react';
import { isEnabledSetting, toggleSetting } from '../../helpers/settings';

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    backgroundColor: `${theme.palette.secondary.main} !important`,
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export const RowSettingComponent = (props) => {
  const { name, keySetting } = props
  const [checked, setChecked] = React.useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setChecked(await isEnabledSetting(keySetting))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangeSwitch = async (e) => {
    await toggleSetting(keySetting, e.target.value)
    setChecked(await isEnabledSetting(keySetting))
  }

  return (
    <Row>
      <Grid item xs={8}>
        { name }
      </Grid>
      <Grid item xs={4}>
        <Android12Switch onChange={onChangeSwitch} checked={checked}/>
      </Grid>
      <Divider/>
    </Row>
  )
}

export default RowSettingComponent;
