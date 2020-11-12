import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardHeader, Grid} from '@material-ui/core';

export class HomeView extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <CardHeader title="Semesters:" align="center" />
        <br />
        <Grid
          container
          direction="row"
          spacing="3"
          alignItems="center"
          justify="center"
        >
          <Grid item lg="3" alignItems="center">
            <Card style={{maxWidth: '500px', maxHeight: '300px'}} elevation="2" onClick={()=>{this.props.history.push("/semester");}}>
              <CardContent>
                <Typography style={{fontSize: '18px'}}>Spring 2020</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg="3">
            <Card style={{maxWidth: '500px', maxHeight: '300px'}} elevation="2">
              <CardContent>
                <Typography style={{fontSize: '18px'}}>Fall 2020</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg="3">
            <Link
              to="/semester"
              style={{color: 'white', textDecoration: 'none'}}
            >
              <Card
                style={{maxWidth: '300px', maxHeight: '300px'}}
                elevation="2"
              >
                <CardContent>
                  <Typography style={{fontSize: '18px'}}>
                    Spring 2021
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomeView;
