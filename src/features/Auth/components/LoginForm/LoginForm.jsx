import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';
LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function LoginForm(props) {
  const { onSubmit } = props;
  const history = useHistory();
  const schema = yup
    .object({
      email: yup.string().required('Mời nhập địa chỉ email').min(5, 'Thấp nhất 5 ký tự').email('Mời nhập đúng định dạng email',()=>/\S+@\S+\.\S+/),
      password: yup.string().required('Mời nhập mật khẩu').min(5, 'Thấp nhất 5 ký tự'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const account = 'admin@gmail.com';
    const passwd = 'letmein';
    
    if(values.email!==account || values.password !==passwd){
      alert('Tài khoản hoặc mật khẩu không đúng');
      
    }
    if (onSubmit) {
      onSubmit(values);
    }
    history.push('/employee');
    //alert('Đăng nhập thành công');
    
  };
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={form.handleSubmit(handleSubmit)}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <InputField id="email" label="Địa chỉ Email" name="email" autoComplete="email" form={form} />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                label='Mật khẩu'
                width_label = '70'
                form={form}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Đăng nhập
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Bạn chưa có tài khoản. Đăng ký?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default LoginForm;
