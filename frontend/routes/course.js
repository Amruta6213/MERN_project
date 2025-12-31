const express=require("express")
const router=express.Router()
const pool=require("../db/pool")
const result=require("../utils/result")
const { authAdmin } = require("../utils/auth");


//get all courses on the date 
router.get("/all_courses",authAdmin,(req,res)=>{
    const {startDate, endDate} = req.query
    const sql = `select * from courses where start_date >= ? and end_date <= ?`
    pool.query(sql,[startDate,endDate],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

// add course
router.post("/add/:cid",authAdmin,(req,res)=>{
    const cid = req.params.cid
    const {course_name,description,fees,start_date,end_date,video_expire_days} = req.body
    const sql = `insert into courses values(?,?,?,?,?,?,?)`
    pool.query(sql,[cid,course_name,description,fees,start_date,end_date,video_expire_days],(error,data)=>{
        res.send(result.createResult(error,data))
    }) 
})
router.put('/update/:courseId',(req, res) => {
  const { courseId } = req.params
  const { courseName, description, fees, startDate, endDate, videoExpireDays } = req.body

  const sql = `
    UPDATE courses
    SET course_name=?, description=?, fees=?, start_date=?, end_date=?, video_expire_days=?
    WHERE course_id=?
  `

  pool.query(
    sql,
    [courseName, description, fees, startDate, endDate, videoExpireDays, courseId],
    (error, data) => {
      res.send(result.createResult(error, data))
    }
  )
})

router.delete('/delete/:courseId',
  (req, res) => {
  const { courseId } = req.params

  const sql = 'DELETE FROM courses WHERE course_id=?'

  pool.query(sql, [courseId], (error, data) => {
    res.send(result.createResult(error, data))
  })
})

//view details of particular course
router.get("/showDetails/:cid",(req,res)=>{
    const cid = req.params.cid
    const sql =`select * from courses where course_id=?`
    pool.query(sql,[cid],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})
module.exports = router