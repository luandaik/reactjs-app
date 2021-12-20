import { useEffect, useState } from 'react';

function formatDate(date) {
    if (!date) return;
    const year = date.getFullYear();
    const month = `0${date.getMonth()}`.slice(-2);
    const day = `0${date.getDay()}`.slice(-2);
    const hour = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${day}/${month}/${year}---${hour}:${minutes}:${seconds}`;
}
function useClock() {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const clockInterVal = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);
        return () => {
            clearInterval(clockInterVal);
        }
    }, []);
    return { timeString };
}

export default useClock;