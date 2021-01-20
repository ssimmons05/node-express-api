const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8091

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('Hello World from Express')
})

app.get('/hello/:hello_id', (req, res) => {
    res.json({"id": req.params.hello_id})
})

app.post('/object', (req, res) => {
    const myObj = [{ "numGears": "6"},{ "numGears": "2"}];
    res.json(myObj)
  })

app.put('/hello/:hello_id', (req, res) => {
    res.json({"id": req.params.hello_id})
})

app.delete('/hello/:hello_id', (req, res) => {
    res.json({"id": req.params.hello_id})
})

app.listen(port, () => {
    console.log(`Hello World from Express server listening at http://localhost:${port}`)
  })