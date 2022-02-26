import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UserList from './Users/UserList';


function AddStudent(props) {
    const [users,setUsers] = useState([]);
    const handleAddUser = (e)=>{
        
        setUsers((initUsers)=>{
            return[...initUsers,e]
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