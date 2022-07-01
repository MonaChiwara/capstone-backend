//Imports
const express = require ('express')
const app = express()
require('dotenv').config()
require('./config/database')

// ==== ROUTES ====
app.use('/api/v1/movies', require('./routes/api/blogs.js'))

// ==== PORT ====
const PORT = 8070

app.listen(PORT, () => console.log (`Express app running on PORT ${PORT}`))