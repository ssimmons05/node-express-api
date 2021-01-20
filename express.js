const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8091

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/timer', (req, res) => {
  res.send('Hello World from Express')
})

app.get('/timer/:timer_id', (req, res) => {
    res.json({"id": req.params.timer_id})
})

app.post('/timer', (req, res) => {
    const response = { "id": "6", "err": "false"};
    res.json(response)
  })

app.put('/timer/:timer_id', (req, res) => {
    res.json({"id": req.params.timer_id})
})

app.delete('/timer/:timer_id', (req, res) => {
    res.json({"id": req.params.timer_id})
})

app.listen(port, () => {
    console.log(`Hello World from Express server listening at http://localhost:${port}`)
  })