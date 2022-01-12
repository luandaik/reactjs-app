import React, { useState } from 'react';
import './styles.scss'
ColorBox.propTypes = {
    
};
function getRandomColor(){
    const COLOR_LIST = ['green','blue','black','orange','red'];
    const randomIndex = Math.trunc(Math.random()*5);
    return COLOR_LIST[randomIndex];
}
function ColorBox(props) {
    
    const [color,setColor] = useState(()=>{
        const initColor  = localStorage.getItem('color-box') || 'deeppink';
        return initColor;
    });
    function handleColorBox (){
        const newColor = getRandomColor();
        console.log(newColor);
        setColor(newColor);
        // localStorage.setItem('color-box',newColor);
    }
    return (
        <div className='color-box' style={{backgroundColor: color}} onClick={handleColorBox}>
        </div>
    );
}

export default ColorBox;