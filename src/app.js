require('./db/connection');
const yargs = require('yargs');
const mongoose = require('mongoose');
const {createMovie} = require ('./movies/functions');


async function app (yargsObject) {
    if (yargsObject.create) {
        await createMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director});
        //code to adda a movie
    } else if (yargsObject.read) {
        // code to list all movies
    } else if (yargsObject.update) {
        // code to update one movie field
    } else if (yargsObject.delete) {
        // delete one movie
    } else {
        console.log("Command not recognized")
    }
    await mongoose.disconnect();
};

app(yargs.argv);