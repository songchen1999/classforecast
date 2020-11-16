import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MTable from './mtable';
import Modal from './modal';
import Course from './courseInfo';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const one = [
    {
      number: '121',
      instructors: 'Joe Chiu',
      descrip: 'An intro to Compsci',
      credit: 4,
    },
    {
      number: '121',
      instructors: 'Joe Chiu',
      descrip: 'An intro to Compsci',
      credit: 4,
    },
    {
      number: '121',
      instructors: 'Joe Chiu',
      descrip: 'An intro to Compsci',
      credit: 4,
    },
    {
      number: '121',
      instructors: 'Joe Chiu',
      descrip: 'An intro to Compsci',
      credit: 4,
    },
    {
      number: '121',
      instructors: 'Joe Chiu',
      descrip: 'An intro to Compsci',
      credit: 4,
    },
  ];
  const two = [
    {
      number: '250',
      instructors: 'Marius Minea',
      descrip: 'Intro to Computation',
      credit: 4,
    },
    {
      number: '250',
      instructors: 'Marius Minea',
      descrip: 'Intro to Computation',
      credit: 4,
    },
    {
      number: '250',
      instructors: 'Marius Minea',
      descrip: 'Intro to Computation',
      credit: 4,
    },
    {
      number: '250',
      instructors: 'Marius Minea',
      descrip: 'Intro to Computation',
      credit: 4,
    },
    {
      number: '250',
      instructors: 'Marius Minea',
      descrip: 'Intro to Computation',
      credit: 4,
    },
  ];
  const three = [
    {
      number: '320',
      instructors: 'David Fisher',
      descrip: 'Intro to Software Engineering',
      credit: 3,
    },
    {
      number: '320',
      instructors: 'David Fisher',
      descrip: 'Intro to Software Engineering',
      credit: 3,
    },
    {
      number: '320',
      instructors: 'David Fisher',
      descrip: 'Intro to Software Engineering',
      credit: 3,
    },
    {
      number: '320',
      instructors: 'David Fisher',
      descrip: 'Intro to Software Engineering',
      credit: 3,
    },
    {
      number: '320',
      instructors: 'David Fisher',
      descrip: 'Intro to Software Engineering',
      credit: 3,
    },
  ];
  const four = [
    {
      number: '410',
      instructors: 'Eliot Moss',
      descrip: 'Compiler Techniques',
      credit: 3,
    },
    {
      number: '410',
      instructors: 'Eliot Moss',
      descrip: 'Compiler Techniques',
      credit: 3,
    },
    {
      number: '410',
      instructors: 'Eliot Moss',
      descrip: 'Compiler Techniques',
      credit: 3,
    },
    {
      number: '410',
      instructors: 'Eliot Moss',
      descrip: 'Compiler Techniques',
      credit: 3,
    },
    {
      number: '410',
      instructors: 'Eliot Moss',
      descrip: 'Compiler Techniques',
      credit: 3,
    },
  ];
  const five = [
    {
      number: '501',
      instructors: 'David Barrington',
      descrip: 'Formal Language Theory',
      credit: 3,
    },
    {
      number: '501',
      instructors: 'David Barrington',
      descrip: 'Formal Language Theory',
      credit: 3,
    },
    {
      number: '501',
      instructors: 'David Barrington',
      descrip: 'Formal Language Theory',
      credit: 3,
    },
    {
      number: '501',
      instructors: 'David Barrington',
      descrip: 'Formal Language Theory',
      credit: 3,
    },
    {
      number: '501',
      instructors: 'David Barrington',
      descrip: 'Formal Language Theory',
      credit: 3,
    },
  ];
  const others = [
    {
      number: '305',
      instructors: 'Mark Zurk',
      descrip: 'Social Issues in Computing',
      credit: 3,
    },
    {
      number: '305',
      instructors: 'Mark Zurk',
      descrip: 'Social Issues in Computing',
      credit: 3,
    },
    {
      number: '305',
      instructors: 'Mark Zurk',
      descrip: 'Social Issues in Computing',
      credit: 3,
    },
    {
      number: '305',
      instructors: 'Mark Zurk',
      descrip: 'Social Issues in Computing',
      credit: 3,
    },
    {
      number: '305',
      instructors: 'Mark Zurk',
      descrip: 'Social Issues in Computing',
      credit: 3,
    },
  ];

  return (
    <div className={classes.root}>
      <br />
      <AppBar position="static" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered="true"
          aria-label="simple tabs example"
        >
          <Tab label="100" {...a11yProps(0)} />
          <Tab label="200" {...a11yProps(1)} />
          <Tab label="300" {...a11yProps(2)} />
          <Tab label="400" {...a11yProps(3)} />
          <Tab label="500+" {...a11yProps(4)} />
          <Tab label="CICS & Info" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <Modal col={<TabPanel value={value} index={0}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MTable rows={props.courses['100']} />
        </div>
      </TabPanel>} show={<Course/>}/>
      
      <TabPanel value={value} index={1}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MTable rows={props.courses['200']} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MTable rows={props.courses['300']} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MTable rows={props.courses['400']} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MTable rows={props.courses['500+']} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MTable rows={props.courses['CICS']} />
        </div>
      </TabPanel>
    </div>
  );
}
