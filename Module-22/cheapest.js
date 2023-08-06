const phones = [
    { name: 'Reamle', camera: 10, Storage: '32gb', price: 36000, color: 'silver' },
    { name: 'oppo', camera: 10, Storage: '32gb', price: 28000, color: 'silver' },
    { name: 'Vivo', camera: 10, Storage: '32gb', price: 20000, color: 'silver' },
    { name: 'Samsung', camera: 10, Storage: '32gb', price: 50000, color: 'silver' },
    { name: 'Walton', camera: 10, Storage: '32gb', price: 38000, color: 'silver' },
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);