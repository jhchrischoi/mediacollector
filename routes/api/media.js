const express = require('express');
const router = express.Router();
const mediaController = require('../../controllers/api/media');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/media
router.get('/', mediaController.indexMedia)
router.post('/', mediaController.createMedia);
router.get('/:id', mediaController.detailMedia);
router.delete('/:id', mediaController.deleteMedia);
router.put('/:id', mediaController.updateMedia)

module.exports = router;