import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [formInfo, setFormInfo] = useState({
    username: '',
    age: '',
    
  });
  const [error,setError] = useState();
  const handleUsernameChange = (e) => {
    setFormInfo((initFormInfo) => {
      return {
        ...formInfo,
        username: e.target.value,
      };
    });
  };
  const handleAgeChange = (e) => {
    setFormInfo((initFormInfo) => {
      return {
        ...formInfo,
        age: e.target.value,
      };
    });
  };
  const addUserHandle = (e) => {
    e.preventDefault();
    if (formInfo.username.trim().length === 0 || formInfo.age.trim().length === 0) {
      setError({
        title:'Invalid input',
        message:'Please enter a valid age and name (non-empty values).',
      });
      return;
    }
    if (+formInfo.age < 1) {
      setError({
        title:'Invalid age',
        message:'Please enter a valid age (age>0)',
      });
      return;
    }

    props.addUser(formInfo);
    setFormInfo({ username: '', age: '' });
  };
  const handleError = (e)=>{
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal onConfirm={handleError} title={error.title} message={error.message}  />}
    
      <Card className={styles.input}>
        <form onSubmit={addUserHandle}>
          <label htmlFor="username">Username</label>
          <input id="username" value={formInfo.username} onChange={handleUsernameChange} type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={formInfo.age} onChange={handleAgeChange} />
          <Button type="submit">Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
