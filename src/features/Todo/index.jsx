import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id:1,
            title:'Eat',
            status: 'new',
            
        },
        {
            id:2,
            title:'Sleep',
            status: 'completed',
        },
        {
            id:3,
            title:'Code',
            status: 'new',
        },
    ]
    const [todoList,setTodoList] = useState(initTodoList);
    const [filteredStatus,setFilteredStatus] = useState('all');
    const handleTodoClick = (todo,idx)=>{
        //clone curren array to the new one
        const newTodoList = [...todoList];
         newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status==='new'?'completed':'new'
        }

        console.log(todo,idx);
        //toggle state
        setTodoList(newTodoList);
    };
    const handleShowAllClick = ()=>{
        setFilteredStatus('all');
    }
    const handleShowCompletedClick = ()=>{
        setFilteredStatus('completed');
    }
    const handleShowNewClick = ()=>{
        setFilteredStatus('new');
    }
    function handleTodoFormSubmit(formValues){
        const newTodoList = [...todoList];
        const newTodo = {
            id:todoList.length+5,
            status: 'new',
            ...formValues,
        }
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
        //console.log('formValues',formValues);
    }
    const renderTodoList = todoList.filter(todo =>filteredStatus === 'all' || filteredStatus===todo.status );
    return (
        <div>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
        </div>
    );
}

export default TodoFeature;