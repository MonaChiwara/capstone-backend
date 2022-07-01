//Imports
const express = require ('express')
const app = express()
require('dotenv').config()
require('./config/database')

// ===== MIDDLEWARES =====
app.use(express.json())

// ==== ROUTES ====
app.use('/api/v1/blogs', require('./routes/api/blogs.js'))

// ==== PORT ====
const PORT = 8070

app.listen(PORT, () => console.log (`Express app running on PORT ${PORT}`))