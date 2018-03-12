const express = require('express')

const poses = require('./routes/poses')

const server = express()
server.use(express.static('public'))

server.use('/api/v1/poses', poses)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})

module.exports = server


// const bodyParser = require('body-parser')

// server.use(bodyParser.json())
