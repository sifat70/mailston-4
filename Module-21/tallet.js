function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element
        }
    }
    return largest;
}

const heights = [164, 158, 148, 169, 137];
const tallest = maxInArray(heights);
console.log('tallet person is: ', tallest);