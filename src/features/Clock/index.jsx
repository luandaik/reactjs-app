import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};
function formatDate(date){
    if(!date) return;
    const hour = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hour}:${minutes}:${seconds}`;
}
function Clock(props) {
    const [timeString,setTimeString] = useState('');
    useEffect(()=>{
        setInterval(() => {
            const now =  new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);
    },[]);
    return (
        <div>
            <p>{timeString}</p>
        </div>
    );
}

export default Clock;