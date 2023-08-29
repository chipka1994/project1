// "use strict"
// const namerOfFilms = prompt ("Сколько фильмов Вы уже посмотрели?");

// const personalMovieDB = {
//     count: namerOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// const answer1 = prompt("Один из последних просмотренных фильмов?");
// const answer2 = prompt("Насколько оцените его?");
// const answer3 = prompt("Один из последних просмотренных фильмов?");
// const answer4 = prompt("Насколько оцените его?");

// personalMovieDB.movies[answer1] = answer2;
// personalMovieDB.movies[answer3] = answer4;

// console.log(personalMovieDB);


// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

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

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let num = 23;
// while(num < 30){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num<30);

// for(i = 1; i < 8; i++){
//     console.log(i);
// }

// for(i = 2; i < 20; i++){
//     if(i === 14){
//         break;
//     }console.log(i);
// }
// for(i = 2; i < 20; i++){
//     if(i === 14 ){
//         continue;
//     }console.log(i);
// }


// треугольник из звездочек: 

// *
// **
// ***
// ****
// *****
// ******


// let result = '';
// const length = 7;
// for(let i = 1; i < length; i++){
//     for(j = 0; j < i; j++){
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);

// метки

// first: for(i = 0; i < 3; i++){
//     console.log(`First level: ${i}`);
//     for(j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for(k = 0; k < 3; k++){
//             if (k === 2) continue first;
//             console.log(`Third level:${k}`);
//         }
//     }
// }
    



"use strict"

// const namerOfFilms = +prompt ('Сколько фильмов Вы уже посмотрели?', ''); 

// const personalMovieDB = {
//     count: namerOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// // const answer1 = prompt('Один из последних просмотренных фильмов?', ''), 
// //       answer2 = prompt('Насколько оцените его?', ''),
// //       answer3 = prompt('Один из последних просмотренных фильмов?', ''),
// //       answer4 = prompt('Насколько оцените его?', '');

// // personalMovieDB.movies[answer1] = answer2;
// // personalMovieDB.movies[answer3] = answer4;

// for(let i = 0; i < 2; i++){
//     const answer1 = prompt("Один из последних просмотренных фильмов?",''),
//           answer2 = prompt("Насколько оцените его?", '');
//     if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50){
//         personalMovieDB.movies[answer1] = answer2;
//     }else{
//         i--; 
//         //   если не выполняются  предыдущие условия цикл возврацается к answer1
//     }        
// }
// if(namerOfFilms <= 10){
//     console.log('Просмотрено довольно мало фильмов');
// }else if (namerOfFilms > 10 && namerOfFilms <= 30){
//     console.log('Вы классический зритель');
// }else if (namerOfFilms > 30){
//     console.log('Вы киноман');
// }else{
//     console.log('Произощла ошибка');
// }
// console.log(personalMovieDB);


let namerOfFilms; 

function start(){
    namerOfFilms = +prompt ('Сколько фильмов Вы уже посмотрели?', ''); 
    while(namerOfFilms == '' || namerOfFilms == null || isNaN(namerOfFilms)){
        namerOfFilms = +prompt ('Сколько фильмов Вы уже посмотрели?', ''); 

    }
}
start();
const personalMovieDB = {
    count: namerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilm(){
    for(let i = 0; i < 2; i++){
    const answer1 = prompt("Один из последних просмотренных фильмов?",''),
          answer2 = prompt("Насколько оцените его?", '');
    if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50){
        personalMovieDB.movies[answer1] = answer2;
    }else{
        i--; 
    }        
}
}
rememberMyFilm();

function detectPersonalLevel(){
   if(namerOfFilms <= 10){
    console.log('Просмотрено довольно мало фильмов');
   }else if (namerOfFilms > 10 && namerOfFilms <= 30){
    console.log('Вы классический зритель');
   }else if (namerOfFilms > 30){
    console.log('Вы киноман');
   }else{
    console.log('Произощла ошибка');
   } 
}
detectPersonalLevel();
console.log(personalMovieDB);


function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }else{
        console.log('wrong');
    }
}
showMyDB(personalMovieDB);

function writeYourGenres(){
    
    for(let i = 1; i <= 3; i++){
    const myGenres = prompt(`Ваш любимый жанр под номером ${i}`);   
        personalMovieDB.genres[i - 1] = myGenres;
        // либо так
        // personalMovieDB.genres[i - 1] =  prompt(`Ваш любимый жанр под номером ${i}`); 
    }
}
writeYourGenres();


