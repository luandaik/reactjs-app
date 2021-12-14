import React, { useEffect, useRef, useState } from 'react';

function randomColor(currenColor){
    const colorList = ['pink','green','blue','red'];
    const currenIndex = colorList.indexOf(currenColor);
    
    let newIndex = currenIndex;
    while(newIndex===currenIndex){
        newIndex = Math.trunc(Math.random()*colorList.length);
    }
    return colorList[newIndex];
}

function useMagicColor() {
    const [color,changeColor] = useState('transparent');
    const refColor = useRef('transparent');
    useEffect(()=>{
        const colorInterval = setInterval(()=>{
            const newColor = randomColor(refColor.current);
            changeColor(newColor);
            console.log(newColor);
            refColor.current = newColor;
        },1000)
        return ()=>{
            clearInterval(colorInterval);
        }
    },[]);


    return {color};
}

export default useMagicColor;