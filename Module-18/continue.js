var numbers = [45, 56, 54, 25, 13, 78, 85];


for(var i= 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}