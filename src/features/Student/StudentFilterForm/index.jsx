import { Divider, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputField from '../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
StudentFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
StudentFilterForm.defaultProps = {
  onSubmit: null,
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
    }, 300);
  }
  const schema = yup
    .object({
      title: yup.string().required('Mời nhập nội dung công việc').min(5, 'Thấp nhất 5 ký tự'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
     console.log(values);
  };
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Tìm tên sinh viên"
        inputProps={{ 'aria-label': 'Tìm tên sinh viên' }}
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
          <form onSubmit={form.handleSubmit(handleSubmit)}>
          <TextField className={classes.input} autoFocus margin="dense" name="name" id="name" label="Tên sinh viên" form={form} fullWidth />
          <TextField className={classes.input} autoFocus margin="dense" name="age" id="age" label="Tuổi"  form={form} fullWidth />
          <TextField className={classes.input} autoFocus margin="dense" name="address" id="name" label="Địa chỉ"  form={form} fullWidth />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Thêm sinh viên
          </Button>
          </form>
          
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
