const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPoses,
  savePose
}

function getPoses(testDb) {
  const db = testDb || knex
  return db('poses').select()
}

function savePose (deets, testDb) {
  console.log('hello')
  const db = testDb || knex
  return db('poses').insert(deets)
}
