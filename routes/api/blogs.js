const express = require('express')
const router = express.Router()
const blogsCtrl = require('../../controllers/api/blogs')

// GET /api/v1/blogs
router.get('/', blogsCtrl.index)
// POST /api/v1/blogs
router.post('/', blogsCtrl.create)
// PUT /api/v1/blogs/:id
router.put('/:id', blogsCtrl.update)
// DELETE /api/v1/blogs/:id
router.delete('/:id', blogsCtrl.remove)


module.exports = router