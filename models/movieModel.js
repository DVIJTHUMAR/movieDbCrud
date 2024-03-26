const mongoose = require('mongoose')
const movieSchema =  new mongoose.Schema({
    movieName: String ,
    price : Number,
    type : String,
    description : String,
    rating : String,
    movieImage : String,
})

const movieModel =  mongoose.model ("movies", movieSchema);

module.exports = movieModel;



