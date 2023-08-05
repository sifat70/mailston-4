const country = 'Bangladesh';
const age = 19;
const isIndependent = true;
const students = {id: 121, class: 11, name: 'Sifat'};
const friends = [13, 45, 532, 565, 24, 850];
function add(num1, num2){
    return num1 + num2
}




console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof students);
// check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

// .........................

console.log(friends.includes(19));
console.log(friends.includes(21));


if(friends.indexOf(252) !== -1){

}

// concat

const newFriendAge = [12, 13, 14, 48, 55, 44]
const allFriends = newFriendAge.concat(friends);
console.log(allFriends);