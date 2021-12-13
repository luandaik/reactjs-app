import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};
function TodoList({todoList, onTodoClick}) {
    // const {todoList} = props;
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx)
    };

    return (
        <ul className='todoList'>
            {todoList.map((todo, idx) => (
                <li key={todo.id} className={classNames({ 'todo-item': true, completed: todo.status === 'completed' })} onClick={() => { handleTodoClick(todo, idx) }} >{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;