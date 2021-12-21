import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { lightGreen } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../components/form-controls/InputField';
StudentEditForm.propTypes = {
  infoStudent: PropTypes.object,
  editInfoSudent: PropTypes.func,
};
StudentEditForm.defaultProps = {
  infoStudent: null,
  editInfoSudent: null,
};

function StudentEditForm(props) {
  const { infoStudent, editInfoSudent } = props;
  
  const schema = yup
    .object({
      name: yup.string().required('Yêu cầu nhập họ và tên'),
      age: yup.string().required('Yêu cầu nhập tuổi'),
      address: yup.string().required('Yêu cầu nhập địa chỉ'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      id: infoStudent.index,
      name: infoStudent.info.name,
      age: infoStudent.info.age,
      address: infoStudent.info.address,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    if (!editInfoSudent) return;
    editInfoSudent(values);
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
      width: '100%', // Fix IE 11 issue.
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
          <BuildIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sửa thông tin sinh Viên
        </Typography>
        <form className={classes.form} onSubmit={form.handleSubmit(handleSubmit)}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <InputField name="id" id="id" label="Index" autoFocus value={infoStudent.info.id} form={form} variant="outlined" disabled fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputField name="name" id="name" label="Họ và tên" autoFocus form={form} />
            </Grid>
            <Grid item xs={12}>
              <InputField id="age" label="Tuổi" name="age" form={form} />
            </Grid>
            <Grid item xs={12}>
              <InputField id="address" label="Địa chỉ" name="address" form={form} />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Lưu
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default StudentEditForm;
