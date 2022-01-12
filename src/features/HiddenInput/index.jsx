import React, { useState } from 'react';
import PropTypes from 'prop-types';

HiddenInput.propTypes = {
    
};

function HiddenInput(props) {
    const [hidden, setHidden ] = useState(false);
    function handleHiddenEle(){
        setHidden(!hidden);
        alert(hidden);
    }
    return (
        <div>
            <h1 hidden={hidden}>Hello World!!!</h1>
            <button onClick={()=>{
                handleHiddenEle();
            }}>Click</button>
        </div>
    );
}

export default HiddenInput;