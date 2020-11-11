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
    minWidth: 650,
  },
});

function createData(number, instructors, descrip, credit) {
  return { number, instructors, descrip, credit};
}

const rowss = [
  createData('121', 'Joe Chiu', "an introduction to computer science", 4),
  createData('121', 'Joe Chiu', "an introduction to computer science", 4),
  createData('121', 'Joe Chiu', "an introduction to computer science", 4),
  createData('121', 'Joe Chiu', "an introduction to computer science", 4),
  createData('121', 'Joe Chiu', "an introduction to computer science", 4),
];

export default function BasicTable({rows}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Course Number</TableCell>
            <TableCell align="left">Instructors</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Credits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.number}</TableCell>
              <TableCell align="left">{row.instructors}</TableCell>
              <TableCell align="left">{row.descrip}</TableCell>
              <TableCell align="left">{row.credit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
