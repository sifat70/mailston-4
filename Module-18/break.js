// for( var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i > 5){
//         break;
//     }
// }


// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log('Roast Den', 'girt nia aici');
//     roastGiven++;
//     if(roastGiven > 4){
//         break;
//     }
// }


// var items = ['notebook', 'bottle', 'mouse', 'sunglass', 'pen'];

// for(var i =0; i < items.length; i++){
//     var item = items[i];
//     if(item == 'pen'){
//         break;
//     }
//     console.log(item);
// }


var numbers = [45, 56, 54, 25, 120, 13, 78, 85];


for(var i= 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}