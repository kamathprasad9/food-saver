require('dotenv').config()
require('./db/mongoose')
const cors = require("cors")
const express = require('express')
var app = express()


const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.json());

// handling cors origin for frontend
app.use(cors({
	origin: "http://localhost:3000",
	credentials: true
}))

const donationRoutes = require('./routes/donations')

app.use('/api/donations', donationRoutes)

// Error Page
app.get('*', (req, res) => {
    res.send('Error. This link does not exist')
})

PORT = process.env.PORT
// Runs Cron Job
app.listen(PORT, () => {
    console.log(`Server is on Port : ${PORT}`)
})