import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import './styles.scss';


function MagicColor() {
    const {color} = useMagicColor();
    return (
        <div className='color-box' style={{background:color}}>
            
        </div>
    );
}

export default MagicColor;