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
    hover:true,
    "&:hover": {
        color: '#fff'
      }
  },
}));

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

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
          <Button color="inherit" onClick={handleClickOpen}>Đăng ký</Button>
          <NavLink to="login" className={classes.link}>
            <Button color="inherit">Đăng nhập</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Đăng ký</DialogTitle>
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
    </div>
  );
}
