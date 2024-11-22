export const genTimeSlot = (num) => {
    return `${Math.floor(num / 2) + 5}:${num % 2 === 0 ? '00' : '30'} p.m.`;
};

export const genGroup = (num) => {
    num = parseInt(num);
    if(num===1) {
        return '1 person';
    } else if(num > 1 && num < 11) {
        return `${num} people`;
    } else {
        return 'Larger party';
    }
};

export const toDateString = (date) => {
    // get a date string with the same format of .toISOString().slice(0,10) but local time
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};