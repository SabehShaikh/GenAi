// Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each
//  section based on what you need at that moment, like adjusting labels based on user choices.
var movie = {};
var moviename = 'name';
var year = 'year';
var genre = 'genre';
movie[moviename] = 'The Batman';
movie[year] = 2022;
movie[genre] = 'drama/crime';
console.log(movie);
