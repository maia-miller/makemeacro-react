import request from 'superagent'

const baseUrl = 'http://localhost:3000/api/v1/poses'

export function getPoses (cb) {
  request
    .get(baseUrl)
    .end((err, res) => {
      if (err) console.log(err)
      else cb(res.body)
    })
  }

export function insertNewPose (deets, cb) {
  console.log(deets)
  request
  .post(baseUrl)
  .send(deets)
  .end((err,res) => {
    // cb(err)
  })
}
