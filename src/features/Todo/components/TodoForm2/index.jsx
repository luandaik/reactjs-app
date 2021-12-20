import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
TodoForm2.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function TodoForm2(props) {
  const {onSubmit} = props;
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
    if(onSubmit){
      onSubmit(values);
    }
     
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles();
  return (
    <form className={classes.root}  onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Nhập công việc" form={form} variant="filled" />
    </form>
  );
  
}

export default TodoForm2;
