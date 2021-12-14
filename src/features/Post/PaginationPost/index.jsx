import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
PaginationPost.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};
PaginationPost.defaultProps={
    onPageChange: null,
}

function PaginationPost(props) {
    const {pagination,onPageChange} = props;
    const {next_page_url,prev_page_url} =pagination;
    function handlePageChange(newPage){
        if(onPageChange){
            onPageChange(newPage);
        }  
    }
    return (
        <div className='pagination-btn-group'>
            <button disabled={prev_page_url===null} onClick={(()=>handlePageChange(prev_page_url))}>
                Prev
            </button>
            <button disabled={next_page_url===null} onClick={(()=>handlePageChange(next_page_url))}>
                Next
            </button>

        </div>
    );
}

export default PaginationPost;