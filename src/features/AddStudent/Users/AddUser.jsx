import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [formInfo, setFormInfo] = useState({
    username: '',
    age: '',
  });
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
    if (formInfo.username.trim().length === 0 || formInfo.age.trim().length === 0) {
      return;
    }
    if (+formInfo.age < 1) {
      return;
    }
    e.preventDefault();
    props.addUser(formInfo);
    setFormInfo({ username: '', age: '' });
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandle}>
        <label htmlFor="username">Username</label>
        <input id="username" value={formInfo.username} onChange={handleUsernameChange} type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={formInfo.age} onChange={handleAgeChange} />
        <Button type="submit">Add User </Button>
      </form>
      
    </Card>
  );
};

export default AddUser;
