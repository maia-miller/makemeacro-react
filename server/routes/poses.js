const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const db = require('../db/db')

const router = express.Router()

router.use(bodyParser.json())

router.get('/', cors(), function (req, res) {
  db.getPoses()
  .then(poses => res.json(poses))
})

router.post('/', cors(), function (req, res) {
  db.savePose(req.body)
  .then((err, data) => {
    res.json(data)
      })
})


module.exports = router
