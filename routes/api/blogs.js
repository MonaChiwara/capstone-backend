const express = require('express')
const router = express.Router()
const blogsCtrl = require('../../controllers/api/blogs')

// GET /api/v1/blogs
router.get('/', blogsCtrl.index)

module.exports= router