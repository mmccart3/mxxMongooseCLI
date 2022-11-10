const MovieCollection = require('./model');

async function createMovie(movieObject) {
    try {
        // console.log(movieObject);
        const newMovie = await MovieCollection.create(movieObject);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {createMovie};