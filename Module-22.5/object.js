const student = {
    name: 'Sakib khan',
    id: 211,
    address: 'akam gor',
    isSingle: true,
    movies: [{name: 'no 1', year: 2015}, {name: 'password', year: 2021}],
    friends: ['Apu', 'Bubly', 'Chery', 'Dighi'],
    act: function(){
        console.log('acting like Sakib khan')
    },
    car: {
        brand: 'telsa',
        price: 50000000,
        made: 2022,
        manufacture: {
            name: 'telsa',
            ceo: 'elon mask'
        }
    } 
}
// console.log(student);
student.act();