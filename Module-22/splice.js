const friends = [12, 24, 32, 28, 14, 78];


// Removes elements from an array and,
// if necessary, inserts new elements in their place,
// returning the deleted elements.
// will change the original array
const partial = friends.splice(2, 3 , 99, 100);
console.log(partial);
console.log(friends);
