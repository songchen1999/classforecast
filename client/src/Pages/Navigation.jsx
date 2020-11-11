import React from 'react';
import '../App.css';
import {Toolbar, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import {IconButton} from '@material-ui/core';
import {Home} from '@material-ui/icons';

import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <AppBar position="static" style={{width: '100%'}} elevation={0}>
      <Toolbar style={{width: '100%'}}>
        <Link to="/" style={navStyle}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
        </Link>
        <Typography style={{fontSize: '25px'}}>ClassForecast</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
