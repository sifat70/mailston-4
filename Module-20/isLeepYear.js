/* function isLeepYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
} */


function isLeepYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}

const isMyYearLeepYear = isLeepYear(1993);
console.log('my year ', isMyYearLeepYear);

const isherYearLeepYear = isLeepYear(1920);
console.log('my year ', isherYearLeepYear)