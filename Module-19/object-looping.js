// array vs objects

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}


var shoppingItems = ['books', 'pen', 'number', 'penti'];
var friendAge = [12, 25, 55, 777, 650];

var friendAge = {
    rohim: 12,
    korim: 88,
    sni: 12,
    mia: 74
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = ['books', 'pen', 'number', 'penti'];
for(var i = 0; i < keys.length; i++){
   var propertyName = keys[i];
   var propertyValue = shoppingCart[propertyName];
   console.log(propertyName, propertyValue);
}


// for in loop

for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName, value);
}