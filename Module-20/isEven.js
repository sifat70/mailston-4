function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(233);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(222);
console.log(herNumberIsEven);