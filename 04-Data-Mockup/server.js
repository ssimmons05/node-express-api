const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8082

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// move routing to an external file to keep things organized
const students = require('./students.js')
app.use('/students', students)

// create a webserver so we can listen for requests
app.listen(port, () => {
    console.log(`Hello World from Express server listening at http://localhost:${port}`)
})