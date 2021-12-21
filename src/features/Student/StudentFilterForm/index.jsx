import { yupResolver } from '@hookform/resolvers/yup';
import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import StudentAdd from '../StuduntAdd';
StudentFilterForm.propTypes = {
  onSubmit: PropTypes.func,
  formSubmit: PropTypes.func,
};
StudentFilterForm.defaultProps = {
  onSubmit: null,
  formSubmit: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '99%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  submit: {
    margin: theme.spacing(3, 1, 2),
  },
}));
function StudentFilterForm(props) {
  const { formSubmit } = props;
  const handleStudentAddFormSubmit = (values) => {
    if (!formSubmit) return;
    formSubmit(values);
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeOutRef = useRef(null);
  function handleSeachTermChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;
    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }
    typingTimeOutRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: value,
      };
      onSubmit(formValue);
    }, 800);
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Tìm theo tên sinh viên, tuổi, địa chỉ"
        inputProps={{ 'aria-label': 'Tìm tên sinh viên, tuổi, địa chỉ' }}
        value={searchTerm}
        onChange={handleSeachTermChange}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* -----------Diaglog--------------- */}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Thêm sinh viên
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thêm mới sinh viên</DialogTitle>
        <DialogContent>
          {/* <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField autoFocus name="name" id="name" label="Tên sinh viên" form={form} />
            <InputField name="age" id="age" label="Tuổi" form={form} />
            <InputField name="address" id="name" label="Địa chỉ" form={form} />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Thêm sinh viên
            </Button>
          </form> */}
          <StudentAdd studenFormSubmit={handleStudentAddFormSubmit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Thoát
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default StudentFilterForm;
