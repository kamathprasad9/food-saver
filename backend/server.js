require('dotenv').config()
require('./db/mongoose')
const express = require('express')
var app = express()


const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.json());

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