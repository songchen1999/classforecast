import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 800,
    
  },
});

function createData(courseNum, courseName, credits, professor, rating, website, prereq, description) {
  return { courseNum, courseName, credits, professor, rating, website, prereq, description };
}

const rows = [
  createData('CS121', 'An Introduction to Computer Science', 4, 'Joe Chiu', "4.2/5", "wwww.cs121.com", "None", "Lorem ipsum dolor sit amet, consectetur adipiscing elit." ),
  /*createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),*/
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Overview</TableCell>
            <TableCell align="left">Course Number</TableCell>
            <TableCell align="left">Course Name</TableCell>
            <TableCell align="left">Credits</TableCell>
            <TableCell align="left">Professor</TableCell>
            <TableCell align="left">Rate My Professor Rating</TableCell>
            <TableCell align="left">Course Website</TableCell>
            <TableCell align="left">Prerequisites</TableCell>
            <TableCell align="left">Course Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.courseNum}</TableCell>
              <TableCell align="left">{row.courseName}</TableCell>
              <TableCell align="left">{row.credits}</TableCell>
              <TableCell align="left">{row.professor}</TableCell>
              <TableCell align="left">{row.rating}</TableCell>
              <TableCell align="left">{row.website}</TableCell>
              <TableCell align="left">{row.prereq}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
