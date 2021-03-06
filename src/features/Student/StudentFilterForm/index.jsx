import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
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
    setOpen(false);
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
        placeholder="T??m theo t??n sinh vi??n ho???c tu???i ho???c ?????a ch???"
        inputProps={{ 'aria-label': 'T??m t??n sinh vi??n, tu???i, ?????a ch???' }}
        value={searchTerm}
        onChange={handleSeachTermChange}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* -----------Diaglog--------------- */}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Th??m sinh vi??n
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Th??m m???i sinh vi??n</DialogTitle>
        <DialogContent>
          {/* <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField autoFocus name="name" id="name" label="T??n sinh vi??n" form={form} />
            <InputField name="age" id="age" label="Tu???i" form={form} />
            <InputField name="address" id="name" label="?????a ch???" form={form} />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Th??m sinh vi??n
            </Button>
          </form> */}
          <StudentAdd studenFormSubmit={handleStudentAddFormSubmit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Tho??t
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default StudentFilterForm;
