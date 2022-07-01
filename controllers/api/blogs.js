const Blog = require('../../models/Blog')

//Find all Blogs
const index = async (req, res) => {
    try{
        const blogs = await Blog.find({})
        res.status(200).json(blogs)
    } catch(e){
        res.status(400).json({msg: e.message})
    }
}

// Create a blog
const create = async (req, res) => {
    try{
        const createdBlog = await Blog.create(req.body)
        res.status(200).json(createdBlog)
    } catch(e){
        res.status(400).json({msg: e.message})
    }
}

// Update a blog
const update = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedBlog)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    index, 
    create,
    update,

}