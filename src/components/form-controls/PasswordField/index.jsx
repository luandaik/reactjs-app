import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  data_label: PropTypes.string,
  disabled: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
    padding: 0,
    margin: 0,
  },
}));
function PasswordField(props) {
  const classes = useStyles();
  const { form, name, label, disabled,width_label } = props;
//   console.log(data_label);
  const { errors, formState } = form;
  const hasError = formState.touched[name] && errors[name];
  //console.log(errors[name]?.message);
  const [showPassword, setShowPassword] = useState(false);
  //   console.log(formState.touched[name], errors[name]);
  const toggleShowPassWord = () => {
    setShowPassword((x) => !x);
  };
  return (
    <div>
      {/* <Controller
        error={!!hasError}
        id="standard-error-helper-text"
        name={name}
        control={form.control}
        as={TextField}
        label={label}
        fullWidth
        disabled={disabled}
        helperText={errors[name]?.message}
        variant="outlined"
      /> */}
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor={name} >{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          as={OutlinedInput}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassWord}
                onMouseDown={toggleShowPassWord}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={width_label}
          disabled={disabled}
        />
      </FormControl>
      <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
    </div>
  );
}

export default PasswordField;
