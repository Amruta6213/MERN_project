
const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()


router.post('/add', (req, res) => {
  const { course_Id, title, youtube_url, description } = req.body

  const sql = `
    INSERT INTO videos (course_id, title, youtube_url, description)
    VALUES (?, ?, ?, ?)
  `

  pool.query(
    sql,
    [course_Id, title, youtube_url, description],
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


// UPDATE VIDEO
router.put('/update/:video_id', (req, res) => {
  const { course_id, title, youtube_url, description } = req.body
  const { video_id } = req.params

  const sql = `
    UPDATE videos
    SET course_id=?, title=?, youtube_url=?, description=?
    WHERE video_id=?
  `

  pool.query(
    sql,
    [course_id, title, youtube_url, description, video_id],
    (error, data) => {
      res.send(result.createResult(error, data))
    }
  )
})

// DELETE VIDEO (ADMIN ONLY)
router.delete('/delete/:video_id', (req, res) => {
  const { video_id } = req.params

  const sql = `DELETE FROM videos WHERE video_id=?`

  pool.query(sql, [video_id], (error, data) => {
    res.send(result.createResult(error, data))
  })
})

// ENROLLED STUDENTS (ADMIN)
router.get('/enrolled-students', (req, res) => {
  const { course_id } = req.query

  const sql = `
    SELECT s.reg_no,s.name,s.email,s.mobile_no,c.course_name
    FROM students s
    JOIN courses c ON s.course_id = c.course_id
    WHERE s.course_id = ?
  `

  pool.query(sql, [course_id], (error, data) => {
    res.send(result.createResult(error, data))
  })
})



module.exports = router
