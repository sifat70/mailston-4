const names = ['abul', 'kabul', 'nabul', 'babul', 'kasem', 'kalam', 'salm', 'abul', 'babul'];

function removeDuplicate(names){
    const unique = [];
    for(i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);