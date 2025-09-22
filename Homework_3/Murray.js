/*
Andrew Murray
Homework 3 – Objects and exception handling in JS
*/

console.log("Andrew Murray - Movie Collection");
// Movie constant to hold movie details//
const Movie = {
    getDetails: function() {
        return `"${this.title}" by ${this.director}, ${this.year}`;
    }
};
// MovieCollection constant, manages a collection of movies//
const MovieCollection = {
    list: [],
    addMovie: function(m) {
        this.list.push(m);
        console.log(`Added: ${m.title}`);
    },
    removeMovie: function(t) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].title === t) {
                this.list.splice(i, 1);
                console.log(`Removed: ${t}`);
                return;
            }
        }
        throw new Error(`Error: "${t}" not found.`);
    },
    showCollection: function() {
        if (this.list.length === 0) throw new Error("Error: Collection is empty.");
        console.log("------ My Movie Collection ------");
        for (let m of this.list) console.log(`- ${m.getDetails()}`);
    }
};
// to test the MovieCollection with error handling//
try {
    let movie1 = Object.create(Movie);
    movie1.title = "Inception"; movie1.director = "C. Nolan"; movie1.year = 2010;
    let movie2 = Object.create(Movie);
    movie2.title = "Shawshank"; movie2.director = "F. Darabont"; movie2.year = 1994;

    MovieCollection.addMovie(movie1);
    MovieCollection.addMovie(movie2);
    MovieCollection.showCollection();
    MovieCollection.removeMovie("Inception");
    MovieCollection.showCollection();
    MovieCollection.removeMovie("Unknown");

} catch (error) {
    console.log(error.message);
}

/*Designed by Andrew Murray @ September 2025*/


/* The Labs I used to help me make these codes were from 
Lab 2,3 and 5. Using Lab 5 for error part of my code Next.
Using Lab 2 and 3 for collecting pushing and for looping 
and splicing*/
