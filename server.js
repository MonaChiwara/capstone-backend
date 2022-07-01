//Imports
const express = require ('express')
const app = express()
require('dotenv').config()

// ==== ROUTES ====

// ==== PORT ====
const PORT = 8070

app.listen(PORT, () => console.log (`Express app running on PORT ${PORT}`))