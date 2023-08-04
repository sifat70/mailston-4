function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i =0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}


function getOddOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 85, 74, 52, 75, 35, 11];
const oddNumbers = getOddOfAnArray(myNumbers);
console.log(oddNumbers);
getSumOfAnArray(myNumbers);

const oddNumberSum = getOddOfAnArray(myNumbers);

console.log('odd number sum', oddNumberSum);