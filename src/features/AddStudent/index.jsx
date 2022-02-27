import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UserList from './Users/UserList';


function AddStudent(props) {
    const [users,setUsers] = useState([]);
    const handleAddUser = (users)=>{
        setUsers((initUsers)=>{
            return[...initUsers,users]
        })
        console.log(users);
    }
    return (
        <div>
            <AddUser addUser={handleAddUser}/>
            <UserList  users={users}/>
        </div>
    );
}

export default AddStudent;