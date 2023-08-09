const numbers = [45, 25, 45, 56,19];
/* 
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
 */
for(const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name: 'xiomy phone One night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'Samsung laptop', price: 19000},
    {id: 1, name: 'nokia phone One night', price: 19000},
    {id: 1, name: 'realme laptop', price: 19000},
    {id: 1, name: 'oppo phone One night', price: 19000},
];

/* for(product of products){
    console.log(product);
} */

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);