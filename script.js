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