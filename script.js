"use strict"
const namerOfFilms = prompt ("Сколько фильмов Вы уже посмотрели?");

const personalMovieDB = {
    count: namerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const answer1 = prompt("Один из последних просмотренных фильмов?");
const answer2 = prompt("Насколько оцените его?");
const answer3 = prompt("Один из последних просмотренных фильмов?");
const answer4 = prompt("Насколько оцените его?");

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.movies[answer3] = answer4;

console.log(personalMovieDB);


console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}








