import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Popup.css';
import HeaderComponent from '../../containers/Header/Header';
import GithubComponent from '../../containers/Github/Github';
import AboutComponent from '../../containers/About/About';
import AutomationComponent from '../../containers/Automation/Automation';
import NotificationComponent from '../../containers/Notification/Notification';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Popup = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue)
  };

  return (
    <React.Fragment>
      <HeaderComponent/>
      <Box
        sx={{ flexGrow: 1, display: 'flex' }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Menu tabs"
          textColor="secondary"
          indicatorColor="secondary"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Automation" {...a11yProps(0)} />
          <Tab label="Notification" {...a11yProps(1)} />
          <Tab label="About" {...a11yProps(2)} />
          <Tab label="Github" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AutomationComponent/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <NotificationComponent/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AboutComponent/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <GithubComponent/>
        </TabPanel>
      </Box>
    </React.Fragment>
  );
};

export default Popup;
