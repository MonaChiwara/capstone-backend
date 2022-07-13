//Imports
const express = require ('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config/database')


// ===== MIDDLEWARES =====
app.use(express.json())

//Check if token and create req.user
app.use(require('./config/checkToken'))
app.use(cors())

// ==== ROUTES ====
// Users

app.use('/api/v1/users', require('./routes/api/users'))

// Protect API routes below fromunauthorized users
const ensureLoggedIn = require('./config/ensureLoggedIn')

// Blogs
app.use('/api/v1/blogs', ensureLoggedIn, require('./routes/api/blogs.js'))




// ==== PORT ====
const PORT = 8070

app.listen(PORT, () => console.log (`Express app running on PORT ${PORT}`))