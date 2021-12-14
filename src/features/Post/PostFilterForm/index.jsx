import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null,
}
function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeOutRef = useRef(null);
    function handleSeachTermChange(e){
        e.preventDefault();
        const value= e.target.value;
        setSearchTerm(value);
        if(!onSubmit) return;
        if(typingTimeOutRef.current){
            clearTimeout(typingTimeOutRef.current);
        }
        typingTimeOutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm:value,
            }
            onSubmit(formValue);
        }, 300);
        
    }
    return (
        <form action="">
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="What are you looking title for?"
                    value={searchTerm} onChange={handleSeachTermChange}
                    />
                </div>
            </div>
        </form>

    );
}

export default PostFilterForm;