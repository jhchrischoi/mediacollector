const Movie = require('../../models/movie')

module.exports = {
    index,
    create,
    detail,
    deleteMovie,
    update
}

async function index(req, res){
    try{
        const movies = await Movie.find();
        res.status(200).json(movies)
    }catch(err){
        res.status(400).json(err)
    }
}

async function create(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res){
    try{
        const movie = await Movie.findById(req.params.id)
        res.status(200).json(movie)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteMovie(req, res){
    try{
        await Movie.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function update(req, res){
    try{
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedMovie)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}