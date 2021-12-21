import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StudenList from './StudentList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';
import StudentFilterForm from './StudentFilterForm';
Student.propTypes = {};

function Student(props) {
  const initStudentList = [
    {
      id: 1,
      name: 'Nguyễn Thị B',
      age: '20',
      address: 'Hà Nội',
    },
    {
      id: 2,
      name: 'Nguyễn Thị B',
      age: '20',
      address: 'Hà Nội',
    },
    {
      id: 3,
      name: 'Hoàng Văn A',
      age: '20',
      address: 'Hà Nội',
    },
  ];
  const history = useHistory();
  const math = useRouteMatch();
  const [filters, setFilters] = useState('');
  function handleFiltersChange(newFilter) {
    const queryParam = { name: newFilter.searchTerm };
    history.push({
      patchname: math.path,
      search: queryString.stringify(queryParam),
    });
    setFilters(newFilter.searchTerm);
  }
  const [studentList, setStudentList] = useState(initStudentList);
  const renderStudentList = studentList.filter((student) => {
    //console.log(filters);
    if (filters === '') return student;
    return student.name === filters || student.age===filters || student.address===filters ;
  });
  function handleStudentFormSubmit(formValues) {
    const newStudentList = [...studentList];
    const newStudent = {
      id: studentList.length + 5,
      ...formValues,
    };
    newStudentList.push(newStudent);
    setStudentList(newStudentList);
  }
  function handleBtnClickButton(value){
    const newStudentList = studentList.filter((student) => {
      if (value !== student.id) return student;
    });
    setStudentList(newStudentList);
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Quản Lý Sinh Viên</h1>
      <StudentFilterForm onSubmit={handleFiltersChange} formSubmit={handleStudentFormSubmit} />
      <StudenList studentList={renderStudentList} onDeleteBtn={handleBtnClickButton} />
    </div>
  );
}

export default Student;
