
const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()


router.post('/add', (req, res) => {
  const { courseId, title, youtubeUrl, description } = req.body

  const sql = `
    INSERT INTO videos (course_id, title, youtube_url, description)
    VALUES (?, ?, ?, ?)
  `

  pool.query(
    sql,
    [courseId, title, youtubeUrl, description],
    (error, data) => {
      res.send(result.createResult(error, data))
    }
  )
})


// get all videos (optionally filter by courseId)
router.get('/all-videos', (req, res) => {
  const { courseId } = req.query

  let sql = 'SELECT * FROM videos'
  const params = []

  if (courseId) {
    sql += ' WHERE course_id = ?'
    params.push(courseId)
  }

  pool.query(sql, params, (error, data) => {
    res.send(result.createResult(error, data))
  })
})



module.exports = router
