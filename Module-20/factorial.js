function fectorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = fectorial(7);
console.log(result);

/* function fectorial(number){
    let result = 1;
    for(let i = 1; i >= number; i++){
        result = result * i;
    }
    return result;
}

const result = fectorial(7);
console.log(result); */