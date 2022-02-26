import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ComputerIcon from '@material-ui/icons/Computer';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import LoginForm from '../../features/Auth/components/LoginForm/LoginForm';
import Register from '../../features/Auth/components/Register';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    hover: true,
    '&:hover': {
      color: '#fff',
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [hidden,setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleLogin = () => {
    handleClose2();
    setHidden(true);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ComputerIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              Learn ReactJS
            </Link>
          </Typography>
          <NavLink to="todo" className={classes.link}>
            <Button color="inherit">Todo</Button>
          </NavLink>

          <NavLink to="student" className={classes.link}>
            <Button color="inherit">Student</Button>
          </NavLink>
          <NavLink to="posts" className={classes.link}>
            <Button color="inherit">Post</Button>
          </NavLink>
          <NavLink to="calculator" className={classes.link}>
            <Button color="inherit">Máy tính</Button>
          </NavLink>
          <Button color="inherit" onClick={handleClickOpen}>
            Đăng ký
          </Button>
          <Button color="inherit" onClick={handleClickOpen2}>
            Đăng nhập
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" hidden>Đăng ký</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Register />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Thoát
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open2}
        onClose={handleClose2}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" hidden>Đăng nhập</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <LoginForm onSubmit={handleLogin} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Thoát
          </Button>
        </DialogActions>
      </Dialog>
     
    </div>
  );
}
