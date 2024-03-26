const movieModel = require("../models/movieModel");
const fs = require('fs');

const defultController = (req, res) => {

    res.render("index");

}

const addMovieController = async (req, res) => {

    var { editId } = req.body;

    if (!editId) {
        const movieData = new movieModel({
            movieName: req.body.movieName,
            price: req.body.price,
            type: req.body.type,
            description: req.body.description,
            rating: req.body.rating,
            movieImage: req.file.path

        })
        console.log('movie data', movieData);

        await movieData.save();
    } else {

        await movieModel.findByIdAndUpdate(editId, {
            movieName: req.body.movieName,
            price: req.body.price,
            type: req.body.type,
            description: req.body.description,
            rating: req.body.rating,
            
        })
        console.log("Edit Done..");
    }
    res.redirect("/views");
}

const viewController = async (req, res) => {
    const MovieCards = await movieModel.find({});
    res.render('views', { MovieCards });
    console.log("viwes Done...");
}

const deleteController = async (req, res) => {
    const id = req.params.id;

    let deleteMovie = await movieModel.findOne({ _id: id });

    console.log('deleteMovie', deleteMovie);

    fs.unlinkSync(`${deleteMovie.movieImage}`)

    await movieModel.deleteOne({ _id: id });
    res.redirect("/views");
    console.log("delete done....");
}

const editController = async (req, res) => {
    const id = req.params.id;

    const singleMovie = await movieModel.findById(id)

    res.render("edit", { singleMovie });

}


module.exports = { defultController, addMovieController, viewController, deleteController, editController }