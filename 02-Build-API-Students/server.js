const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8093

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/students', (req, res) => {
    res.json({"success":"true"})
})

app.get('/students/:studentId', (req, res) => {
    res.json({ "id": req.params.studentId })
})

app.post('/students', (req, res) => {
    res.json({"success":"true"})
})

app.put('/students/:studentId', (req, res) => {
    res.json({ "id": req.params.studentId })
})

app.delete('/students/:studentId', (req, res) => {
    res.json({ "id": req.params.studentId })
})

// create a webserver so we can listen for requests
app.listen(port, () => {
    console.log(`Hello World from Express server listening at http://localhost:${port}`)
})