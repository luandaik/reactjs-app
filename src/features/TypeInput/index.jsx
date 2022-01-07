import React, { useState } from 'react';
import PropTypes from 'prop-types';


TypeInput.propTypes = {
    
};

function TypeInput(props) {
    const [h1ElementValue,setH1ElementValue] = useState();
    const setInput = (e)=>{
        setH1ElementValue(e.target.value);
    }
    return (
        <div className="container">
            <h1>{h1ElementValue}</h1>
            <input type="text" onChange={setInput} />
        </div>
    );
}

export default TypeInput;