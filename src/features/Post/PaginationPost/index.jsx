import React from 'react';
import PropTypes from 'prop-types';

PaginationPost.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};
PaginationPost.defaultProps={
    onPageChange: null,
}

function PaginationPost(props) {
    const {pagination,onPageChange} = props;
    const {current_page,last_page} =pagination;
    function handlePageChange(newPage){
        if(onPageChange){
            onPageChange();
        }  
    }
    return (
        <div>
            <button disabled={current_page<=1} onClick={(()=>handlePageChange(current_page-1))}>
                Prev
            </button>
            <button disabled={current_page>=last_page} onClick={(()=>handlePageChange(current_page+1))}>
                Next
            </button>

        </div>
    );
}

export default PaginationPost;