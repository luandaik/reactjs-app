import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css';

function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={Math.floor(Math.random() * 9999)}>
            {user.username} {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
