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

const Button = ()=>{
    return <div>13</div>
}

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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function filterS(id, arr){
  let result = {};
   arr.forEach(
     (e)=>{
       if(e.id==id){
          result =  e;
       } 
     }
   )
   return result;
}

function rating(name){
  return axios.get(`http://localhost:5000/professor`, {name})
      .then(res => {
        return res;
      });
}

export default function SimpleList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const [courses,setCourses] = React.useState({});

  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/course-description`)
      .then(res => {
        const Courses = filterS(props.id,res.data.courses);

        setCourses(Courses);

      })
      
  },[])

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const text = {
    color: "white"
};

  if(courses['id']==undefined){
    return <Loading/>
  }

  return (
    <div className={classes.root}>
      <List component="nav" style={{flexDirection:'column'}} aria-label="course"
      subheader={
        <ListSubheader component="div" class id="nested-list-subheader" className={classes.header}>
          <p className={classes.header}>{courses.title}</p>
        </ListSubheader>
      }
      className={classes.root}
      >
        <ListItem style={{justifyContent:'space-around'}} button onClick={handleClick1}>
          <ListItemText primary="Professors and Ratings" />
          {open1 ?  <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
         <List component="nav" style={{flexDirection:'column', alignItems:'flex-start'}} disablePadding>
           
                {courses["instructor(s)"].split(',').map(
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
        </Collapse>
        <Divider/>
        <ListItem style={{justifyContent:'space-around'}}>
          <ListItemText primary="Rating" />
          <ListItemText primary="4.3" style={{textAlign:'right'}}/>
        </ListItem>
        <Divider/>
        <ListItem button onClick={handleClick}>
        <ListItemText primary="Course Description" />
        {open ?  <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <ListItemText secondaryTypographyProps={{ style: text }} secondary= {courses.description} />
            </ListItem>
        </List>
        </Collapse>
        </List>
    </div>
  );
}
