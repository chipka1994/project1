"use strict"
const namerOfFilms = prompt ("Сколько фильмов Вы уже посмотрели?");

const personalMovieDB = {
    count: namerOfFilms,
    movies: [],
    actors: [],
    genres: [],
    privat: confirm("false")
};
console.log(personalMovieDB);

const answer1 = prompt("Один из последних просмотренных фильмов?");
const answer2 = prompt("Насколько оцените его?");
