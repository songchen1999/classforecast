import React, {useEffect, useState} from 'react';
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

export default function RatingCollection(props){
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          maxWidth: 360,
          //backgroundColor: theme.palette.background.paper,
        },
        nested: {
          //paddingLeft: theme.spacing(4),
        },
        header:{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: 'large',
        }
      }));
      const text = {
        color: "white"
        };
    const classes = useStyles();

    const [ratings,setRatings] = useState([]);
    useEffect(
    ()=>{   

            console.log(props.courses['instructor(s)'].split(', '));
            //const result = [];
            const arr = props.courses['instructor(s)'].split(', ');
            for (let i=0; i<arr.length; i++){
              axios.get(`http://127.0.0.1:5000/professor`,{params: {'name':arr[i]}})
                    .then(res => {  
                                   
                                    const rate = res.data;
                                    console.log(rate);
                                    
                                    const dup = ratings.map(e=>e);
                                    
                                    dup[i]=rate;
                                    setRatings(dup);
                                   
                                
                                }
                         )
            }


            
        },
        
        [])

        /*
        if(ratings.length!=props.courses['instructor(s)'].split(', ').length){
            return <div>loading</div>
        }
        */
    return (
    
    
    <List component="nav" style={{flexDirection:'column', alignItems:'flex-start'}} disablePadding>
           {props.courses["instructor(s)"].split(',').map((e,i)=>{
     return ( 
     <ListItem className={classes.nested} > 
       <ListItemText style={{align:'left'}} secondaryTypographyProps={{ style: text }} secondary= {e+'=>'}  />
       <ListItemText style={{align:'right'}} secondaryTypographyProps={{ style: text }} secondary= {ratings[i]}  />
     </ListItem>
     )
   }
 )}
 </List>)
}