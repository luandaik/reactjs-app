import React from 'react';
import useClock from '../../hooks/useClock';
import './styles.scss';


function Clock() {
    const { timeString } = useClock(); // 1 cai su dung chung 1 bien timestring
    return (
        <div>
            <p className='time'>{timeString}</p>
            <p className='time2'>{timeString}</p>
        </div>
    );
}

export default Clock;