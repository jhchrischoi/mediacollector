const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/movies');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/movies
router.get('/', moviesController.index)
router.post('/', moviesController.create);
router.get('/:id', moviesController.detail);
router.delete('/:id', moviesController.deleteMovie);
router.put('/:id', moviesController.update)

module.exports = router;