const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')
// blog routes

router.get('/', blogController.blog__index)

router.post('/', blogController.blog__create__post)

router.get('/create',blogController.blog__create__get)

router.get('/:id',blogController.blog__details)

router.delete('/:id', blogController.blog__delete)

module.exports = router