const lyrics = 'Tumi amar koto chena tumi janona';

const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');

// console.log(chars);

const partial = lyrics.slice(5, 8);

// const partial2 = lyrics.substring(5, 8);

// console.log(partial);
const partial2 = lyrics.substring(5, 8);
// console.log(partial2);


const lines = [
    'Tumi bondu kala pakhi ami jeno ki',
    'Bosonto kale tomai bulte pari ni',
    'sada sada kalal kala',
    'rong jomece sada kala'
];

const newSong = lines.join('. ')
console.log(newSong);