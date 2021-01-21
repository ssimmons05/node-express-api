const express = require('express')
const router = express.Router()
const app = express();

// "middleware" function executes whenever the /student route is requested

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// add our routes (HTTP method + endpoint)
router.get('/', (req, res) => {
    res.json({"success":"true"})
})

router.get('/:studentId', (req, res) => {
    res.json({ "id": req.params.studentId })
})

router.post('/', (req, res) => {
    res.json({"success":"true"})
})

router.put('/:studentId', (req, res) => {
    res.json({ "id": req.params.studentId })
})

router.delete('/:studentId', (req, res) => {
    res.json({ "id": req.params.studentId })
})

module.exports = router



