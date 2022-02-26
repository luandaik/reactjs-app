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
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';
RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function RegisterForm(props) {
  const { onSubmit } = props;
  const schema = yup
    .object({
      fullname: yup.string().required('Mời nhập họ và tên').min(5, 'Thấp nhất 5 ký tự'),
      email: yup.string().required('Mời nhập địa chỉ email').min(5, 'Thấp nhất 5 ký tự').email('Mời nhập đúng định dạng email',()=>/\S+@\S+\.\S+/),
      password: yup.string().required('Mời nhập mật khẩu').min(5, 'Thấp nhất 5 ký tự'),
      re_password: yup.string().required('Mời nhập lại mật khẩu').oneOf([yup.ref('password')],'Mật khẩu nhập lại không đúng'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      re_password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    alert('Đăng ký thành công');
    if (onSubmit) {
      onSubmit(values);
    }
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
          Đăng ký tài khoản
        </Typography>
        <form className={classes.form} onSubmit={form.handleSubmit(handleSubmit)}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <InputField autoComplete="fname" name="fullname" id="fullname" label="Họ và tên" autoFocus form={form} />
            </Grid>
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
            <Grid item xs={12}>
              <PasswordField
                name="re_password"
                type="password"
                id="re_password"
                label='Nhập lại mật khẩu'
                autoComplete="current-password"
                width_label = '130'
                form={form}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Đăng ký mới
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Bạn đã có tài khoản? Đăng nhập.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default RegisterForm;
