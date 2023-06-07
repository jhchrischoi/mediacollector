const Collection = require('../../models/collection')
// const Media = require('../../models/media')

module.exports = {
    index,
    create,
    detail,
    deleteCollection,
    update,
    addVideo
}

async function index(req, res){
    try{
        // /api/collections?currentUser=true
        const options = {};
        if(req.query.currentUser){
        options['uploaded_by'] = req.user._id
        }
        const collections = await Collection.find(options);
        res.status(200).json(collections)
    }catch(err){
        res.status(400).json(err)
    }
}

async function create(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newCollection = await Collection.create(req.body);
        res.status(201).json(newCollection)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res){
    try{
        const collection = await Collection.findById(req.params.id).populate('videos');
        res.status(200).json(collection)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteCollection(req, res){
    try{
        await Collection.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function update(req, res){
    try{
        const updatedCollection = await Collection.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedCollection)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}

async function addVideo(req, res){
    try{
        // get req.param
        const collection = await Collection.findById(req.params.id)
        // adding a video (setup the route as well - url with :id and :mediaId)
        collection.videos.push(req.params.mediaId)
        // save it
        await collection.save()
        res.status(200).json(collection)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}