const Blog = require('../../models/Blog')

//Find all Blogs
const index = async (req, res) => {
    try{
        const blogs = await Blog.find({})
        res.status(200).jason(blogs)
    } catch(e){
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    index, 

}