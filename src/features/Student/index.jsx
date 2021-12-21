import queryString from 'query-string';
import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import StudentFilterForm from './StudentFilterForm';
import StudenList from './StudentList';
Student.propTypes = {};

function Student(props) {
  const initStudentList = [
    {
      id: 1,
      name: 'Nguyễn Thị B',
      age: '19',
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
      age: '21',
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
    return student.name === filters || student.age === filters || student.address === filters;
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
  function handleBtnClickDeleteButton(value) {
    const newStudentList = studentList.filter((student) => {
      if (value !== student.id) return student;
    });
    setStudentList(newStudentList);
  }
  function handleBtnClickEditButton(values) {
    console.log(values.name);
    const newStudentList = [...studentList];
    newStudentList[values.id] = {
      ...newStudentList[values.id],
      name: values.name,
      age: values.age,
      address: values.address,
    };
    setStudentList(newStudentList);
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#494dcf' }}>Quản Lý Sinh Viên</h1>
      <StudentFilterForm onSubmit={handleFiltersChange} formSubmit={handleStudentFormSubmit} />
      <StudenList
        studentList={renderStudentList}
        onDeleteBtn={handleBtnClickDeleteButton}
        onEditBTn={handleBtnClickEditButton}
      />
    </div>
  );
}

export default Student;
