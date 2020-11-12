import React from 'react';
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
    paddingLeft: theme.spacing(4),
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

export default function SimpleList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const text = {
    color: "white"
};

  return (
    <div className={classes.root}>
      <List component="nav" style={{flexDirection:'column'}} aria-label="course"
      subheader={
        <ListSubheader component="div" class id="nested-list-subheader" className={classes.header}>
          <p className={classes.header}>COMPSCI 121</p>
        </ListSubheader>
      }
      className={classes.root}
      >
        <ListItem style={{justifyContent:'space-around'}}>
          <ListItemText primary="Taught By" />
          <ListItemText primary="Joe Chiu" style={{textAlign:'right'}}/>
        </ListItem>
        
        <Divider/>
        <ListItem style={{justifyContent:'space-around'}}>
          <ListItemText primary="Rating" />
          <ListItemText primary="4.3" style={{textAlign:'right'}}/>
        </ListItem>
        <Divider/>
        <ListItemLink>
          <ListItemText primary="Credits" />
          <ListItemText primary="4" style={{textAlign:'right'}}/>
        </ListItemLink>
        <Divider/>
        <ListItem button>
          <ListItemText primary="Prerequsites" />
          <ListItemText primary="N/A" style={{textAlign:'right'}}/>
        </ListItem>
        <ListItem button onClick={handleClick}>
        <ListItemText primary="Course Description" />
        {open ?  <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <ListItemText secondaryTypographyProps={{ style: text }} secondary="COMPSCI 121 provides an introduction to problem solving and computer programming using the programming language Java. The course teaches how real-world problems can be solved computationally using the object-oriented metaphor that underlies Java. Concepts and techniques covered include data types, expressions, objects, methods, top-down program design, program testing and debugging, state representation, interactive programs, data abstraction, conditionals, iteration, interfaces, inheritance, polymorphism, arrays, graphics, and GUIs. No previous programming experience is required; however, this course is intended for Computer Science majors or those who plan on applying to the major. Non-majors are strongly encouraged to take one of our programming courses designed for non-majors. Use of a laptop computer on which you can install software is required. Prerequisite: R1 (or a score of 20 or higher on the math placement test Part A), or one of the following courses: MATH 101&102 or MATH 104 or MATH 127 or MATH 128 or MATH 131 or MATH 132. 4 credits." />
            </ListItem>
        </List>
        </Collapse>
        </List>
    </div>
  );
}
