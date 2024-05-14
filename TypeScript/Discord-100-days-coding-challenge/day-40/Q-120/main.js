// Question 120: Use a for...of loop to iterate through an
//  array of your favorite movies and log each one.
var fave_movies = [
    "Shawshank Redemption",
    "Harry Potter",
    "Saving Private Ryan",
    "Interstellar",
];
for (var _i = 0, fave_movies_1 = fave_movies; _i < fave_movies_1.length; _i++) {
    var movie = fave_movies_1[_i];
    console.log("Favourite movies are: ".concat(movie));
}
