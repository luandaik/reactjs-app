import React from 'react';
import PropTypes from 'prop-types';
import StudenList from './StudentList';

Student.propTypes = {
    
};

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
          name: 'Nguyễn Thị B',
          age: '20',
          address: 'Hà Nội',
        },
        
      ];
    return (
        <div>
            <StudenList studentList={initStudentList} />
        </div>
    );
}

export default Student;