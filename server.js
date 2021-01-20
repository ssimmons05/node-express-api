const express = require('express')
const app = express()
const port = 3002

app.get('/hello', (req, res) => {
  res.send('GET Hello World!')
})

app.post('/hello', (req, res) => {
    res.send('POST Hello World!')
})

app.put('/hello', (req, res) => {
    res.send('PUT Hello World!')
  })
  
app.delete('/hello', (req, res) => {
      res.send('DELETE Hello World!')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})