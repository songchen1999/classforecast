import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import Loading from './loading';


export default function ratingCollection(props){

 <List component="nav" style={{flexDirection:'column', alignItems:'flex-start'}} disablePadding>
           
 {props.courses["instructor(s)"].split(',').map(
   e=>{
     return ( 
     <ListItem className={classes.nested}> 
       <ListItemText style={{align:'left'}} secondaryTypographyProps={{ style: text }} secondary= {e}  />
       <ListItemText style={{align:'left'}} secondaryTypographyProps={{ style: text }} secondary= {1}  />
     </ListItem>
     )
   }
 )}
 

</List>
}