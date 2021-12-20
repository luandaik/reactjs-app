import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import querySring from 'query-string';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import TodoForm2 from '../../components/TodoForm2';
import TodoList from '../../components/TodoList';
import Card from '@material-ui/core/Card';
ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    minWidth: 500,
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  const location = useLocation();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = querySring.parse(location.search);
    return params.status || 'all';
  });
  const handleTodoClick = (todo, idx) => {
    //clone curren array to the new one
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    console.log(todo, idx);
    //toggle state
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };
  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };
  const handleShowNewClick = () => {
    setFilteredStatus('new');
  };
  function handleTodoFormSubmit(formValues) {
    const newTodoList = [...todoList];
    const newTodo = {
      id: todoList.length + 5,
      status: 'new',
      ...formValues,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  const renderTodoList = todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  return (
    <Card className={classes.root}>

      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}

      <TodoForm2 onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <Button variant="contained" className={classes.button} color="primary" onClick={handleShowAllClick}>
        Hiển thị tất cả
      </Button>
      <Button variant="contained" className={classes.button} color="primary" onClick={handleShowCompletedClick}>
        Hiển thị hoàn thành
      </Button>
      <Button variant="contained" className={classes.button} color="primary" onClick={handleShowNewClick}>
        Hiển thị mới
      </Button>
    </Card>
  );
}

export default ListPage;
