const lyrics = 'Tumi amar koto chena tumi janona';

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('amar');
// const doesExist = lyrics.includes('Amar');
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();

// const doesExist = lyrics.toLowerCase(searchString);

const searchStringLower = searchString.toLowerCase();


const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
const doesExist = lyricsLowerCase.includes(searchStringLower);
// console.log(doesExist);
// console.log(doesExistOneLine);

// -----------------------------

// indexOf 

console.log(lyrics.indexOf('koto'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('amar') !== -1){
    console.log('exists inside the string')
}
else{
    console.log('cannot find it');
}

console.log(lyrics.startsWith('tumi'));



const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf')