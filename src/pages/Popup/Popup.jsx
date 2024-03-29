import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Popup.css';
import HeaderComponent from '../../containers/Header/Header';
import GithubComponent from '../../containers/Github/Github';
import AboutComponent from '../../containers/About/About';
import AutomationComponent from '../../containers/Automation/Automation';
import Veto from '../../containers/Veto/Veto';
// import NotificationComponent from '../../containers/Notification/Notification';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className='tab-panel'
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <React.Fragment>{children}</React.Fragment>
      )}
    </div>
  );
}

const Popup = () => {
  const [value, setValue] = React.useState(0)
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

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue)
  };

  return (
    <React.Fragment>
      <HeaderComponent/>
      <Box
        sx={{ flexGrow: 1, display: 'flex' }}
        style={{ marginTop: '10px' }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Menu tabs"
          textColor="secondary"
          indicatorColor="secondary"
          sx={{ borderRight: 1, borderColor: 'divider' }}
          style={{width: '160px'}}
        >
          <Tab label="Automation" {...a11yProps(0)} />
          {/* <Tab label="Veto" {...a11yProps(1)} /> */}
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Github" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AutomationComponent/>
        </TabPanel>
        {/* <TabPanel value={value} index={1}>
          <Veto/>
        </TabPanel> */}
        {/* <TabPanel value={value} index={1}> */}
          {/* <NotificationComponent/> */}
        {/* </TabPanel> */}
        <TabPanel value={value} index={1}>
          <AboutComponent/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <GithubComponent/>
        </TabPanel>
      </Box>
    </React.Fragment>
  );
};

export default Popup;
