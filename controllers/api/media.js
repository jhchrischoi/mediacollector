const Media = require('../../models/media')

module.exports = {
    indexMedia,
    createMedia,
    detailMedia,
    deleteMedia,
    updateMedia
}

async function indexMedia(req, res){
    try{
        const media = await Media.find();
        res.status(200).json(media)
    }catch(err){
        res.status(400).json(err)
    }
}

async function createMedia(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newMedia = await Media.create(req.body);
        res.status(201).json(newMedia)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detailMedia(req, res){
    try{
        const media = await Media.findById(req.params.id)
        res.status(200).json(media)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteMedia(req, res){
    try{
        await Media.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function updateMedia(req, res){
    try{
        const updatedMedia = await Media.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedMedia)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}