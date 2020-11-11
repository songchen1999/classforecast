import React from 'react';
import '../App.css';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {Home} from '@material-ui/icons';

import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <AppBar position="static">
      <Toolbar>
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
