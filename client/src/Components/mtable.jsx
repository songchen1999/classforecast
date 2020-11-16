import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '../Components/modal'
import Info from '../Components/courseInfo'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({rows}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Course Number</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Credits</TableCell>
            <TableCell align="left">Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{<Modal col={row.number} show={<Info/>}/>}</TableCell>
              <TableCell align="left">{<Modal col={row.title} show={<Info/>}/>}</TableCell>
              <TableCell align="left">{<Modal col={row.credits} show={<Info/>}/>}</TableCell>
              <TableCell align="left">{<Modal col={row.semester} show={<Info/>}/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
