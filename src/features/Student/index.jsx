import React from 'react';
import PropTypes from 'prop-types';
import StudenList from './StudentList';

index.propTypes = {
    
};

function index(props) {
    const initStudentList = [
        {
          id: 1,
          name: 'Nguyễn Thị B',
          age: 'new',
          address: 'Hà Nội',
        },
        {
          id: 2,
          name: 'Nguyễn Thị B',
          age: 'new',
          address: 'Hà Nội',
        },
        {
          id: 3,
          name: 'Nguyễn Thị B',
          age: 'new',
          address: 'Hà Nội',
        },
        
      ];
    return (
        <div>
            <StudenList studentList={initStudentList} />
        </div>
    );
}

export default index;