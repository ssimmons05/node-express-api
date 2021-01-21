const express = require('express')
const router = express.Router()
const app = express();

// fake our database so we can test our endpoints before connecting Mongo
const studentData = [
    { name: 'TJ', email: 'tj@skc.org' },
    { name: 'Tobi', email: 'tobi@skc.org' }
  ];

// "middleware" function executes whenever the /student route is requested
/*
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
*/
// add our routes (HTTP method + endpoint)
router.get('/', (req, res) => {
    res.json(studentData);
})

router.get('/:studentId', (req, res) => {
    res.json(studentData[req.params.studentId])
})

router.post('/', (req, res) => {
    studentData.push(req.body)
    res.json({ "success":"true","id": "3", "inserted":req.body })
})

router.put('/:studentId', (req, res) => {
    res.json({ "success":"true", "updated":req.body })
})

router.delete('/:studentId', (req, res) => {
    res.json({ "success":"true" })
})

module.exports = router



