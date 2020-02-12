const express = require('express')
const cors = require('cors')

const apiRouter = require('./routes')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', apiRouter)

app.listen('5050', () => {
    console.log('Server is running on port 5050')
})
