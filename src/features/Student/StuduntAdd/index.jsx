import React from 'react';
import PropTypes from 'prop-types';
import StudentAddForm from '../StudentAddForm';

StudentAdd.propTypes = {
  studenFormSubmit: PropTypes.func,
};
StudentAdd.defaultProps = {
  studenFormSubmit: null,
};

function StudentAdd(props) {
  const { studenFormSubmit } = props;
  const handleSubmit = (values) => {
    studenFormSubmit(values);
  };
  return (
    <div>
      <StudentAddForm studentOnSubmit={handleSubmit} />
    </div>
  );
}

export default StudentAdd;
