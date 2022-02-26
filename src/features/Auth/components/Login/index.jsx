import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm/LoginForm';

Login.propTypes = {
    
};
const employees = [
    {
      id: 1,
      name: 'Hoa',
      age: 20,
    },
    {
      id: 2,
      name: 'Khánh',
      age: 25,
    },
    {
      id: 3,
      name: 'Tú',
      age: 22,
    },
  ];
function Login(props) {
    return (
        <div>
     
            <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">AGE</th>
          </tr>
        </thead>
        <tbody>
        {employees.map((e)=>(
            <tr>
            <th scope="row">1</th>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
          </tr>
        ))}
          
        
          

        </tbody>
      </table>
        </div>
    );
}

export default Login;