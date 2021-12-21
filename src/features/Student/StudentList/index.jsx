import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import StudentEditForm from '../StudentEditForm';
StudenList.propTypes = {
  studentList: PropTypes.array,
  onDeleteBtn: PropTypes.func,
  onEditBTn: PropTypes.func,
};
StudenList.defaultProps = {
  studentList: [],
  onDeleteBtn: null,
  onEditBTn: null,
};
function StudenList({ onDeleteBtn, studentList ,onEditBTn }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    btn: {
      margin: 2,
    },
  });
  const rows = studentList;
  const classes = useStyles();
  const [studentInfo,setStudentInfo] =useState({});
  function handleDeteleButton(value) {
    if (!onDeleteBtn) return;
    onDeleteBtn(value);
  }
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInfoStudent = (values) =>{
    if(!onEditBTn) return;
    onEditBTn(values);
    setOpen(false);
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Tên</TableCell>
              <TableCell align="right">Tuổi</TableCell>
              <TableCell align="right">Địa chỉ</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,idx) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" className={classes.btn} color="primary" onClick={()=>{
                    handleClickOpen();
                    console.log(idx);
                    setStudentInfo({info:row,index:idx});
                  }}>
                    Sửa
                  </Button>

                  <Button
                    variant="contained"
                    onClick={() => {
                      handleDeteleButton(row.id);
                    }}
                    className={classes.btn}
                    color="secondary"
                  >
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* -------------DiagLog------------------ */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sửa thông tin sinh viên</DialogTitle>
        <DialogContent>
          <StudentEditForm infoStudent={studentInfo} editInfoSudent={handleInfoStudent}  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Thoát
          </Button>
        </DialogActions>
      </Dialog>

      {/* -------------End DiagLog------------------------- */}
    </div>
  );
}

export default StudenList;
