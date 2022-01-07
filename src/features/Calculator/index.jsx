import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../components/form-controls/InputField';
Calculator.propTypes = {};
function Calculator(props) {
  const schema = yup
    .object({
      calculator: yup.string().required('Mời nhập phép tính'),
    })
    .required();

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '50ch',
      },
      textAlign: 'center',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgb(122 105 109 / 30%)',
      padding: '10 30px',
    },
    calcu: {
      border: 0,
      borderRadius: 3,
      boxShadow: '3px 3px 5px 2px rgb(122 105 109 / 30%)',
    },
  }));
  const classes = useStyles();
  const form = useForm({
    defaultValues: {
      calculator: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    try {
      const resultCal = eval(values.calculator);
      setResult(resultCal);
    } catch {
      setResult('Phép tính sai');
    }
  };
  const [result, setResult] = useState(0);
  return (
    <div className={classes.root}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="calculator" label="Nhập phép tính" form={form} />
      </form>
      <TextField value={result} className={classes.calcu}  variant="outlined" disabled />
    </div>
  );
}

export default Calculator;
