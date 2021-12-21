import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { VerticalAlignTopTwoTone } from '@material-ui/icons';
StudenList.propTypes = {
  studentList: PropTypes.array,
  onDeleteBtn: PropTypes.func,
};
StudenList.defaultProps = {
  studentList: [],
  onDeleteBtn: null,
};
function StudenList({onDeleteBtn, studentList }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    btn: {
      margin: 2,
    }
  });
  const rows = studentList;
  const classes = useStyles();
  function handleDeteleButton(value){
     if(!onDeleteBtn) return;
     onDeleteBtn(value);
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">
                  <Button variant="contained"  className={classes.btn} color="primary">
                    Sửa
                  </Button>
                  <Button variant="contained"  onClick={()=>{handleDeteleButton(row.id)}} className={classes.btn} color="secondary">
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StudenList;
