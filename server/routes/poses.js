const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/db')

const router = express.Router()

router.use(bodyParser.json())

router.get('/', function (req, res) {
  db.getPoses()
  .then(poses => res.json(poses))
})

router.post('/', function (req, res) {
  db.savePose(req.body)
  .then((err, data) => {
    res.json(data)
      })
})



module.exports = router
