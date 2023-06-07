const express = require('express');
const router = express.Router();
const collectionsController = require('../../controllers/api/collection');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/collections
router.get('/', collectionsController.index)
router.post('/', collectionsController.create);
router.get('/:id', collectionsController.detail);
router.delete('/:id', collectionsController.deleteCollection);
router.put('/:id', collectionsController.update)
router.post('/:id/add-video/:mediaId', collectionsController.addVideo)
module.exports = router;