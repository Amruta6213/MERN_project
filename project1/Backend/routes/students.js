const express = require('express')
const cryptojs = require('crypto-js')
const jwt = require('jsonwebtoken')

const pool = require('../db/pool')
const result = require('../utils/result')
const config = require('../utils/config')

const router=express.Router()

//student register to particular course 
router.post("/register", (req, res) => {
    const { course_id, email, name, mobile_no } = req.body
    const sql = `insert into students(course_id, email,name, mobile_no) values(?,?,?,?)`
    const sql2 = `SELECT 1 FROM users WHERE email = ? LIMIT 1;`
    const sql3 = `insert into users (email,password) values(?,?)`
    pool.query(sql2, [email], (error, data) => {
        if (error) {
            return res.send(result.createResult(error))
        }
        if (data.length == 0) {
             const hashedPass = cryptojs.SHA256("sunbeam").toString()
            // res.send(result.createResult("email not found"))
            pool.query(sql3, [email,hashedPass ] , (error, data) => {
                // res.send(result.createResult(error,data))
                if (error) {
                   return res.send(result.createResult(error))
                }
                pool.query(sql, [course_id, email, name, mobile_no], (error, data) => {
                    return res.send(result.createResult(error, data))
                })

            })
            // pool.query(sql,[courseId, email,name, mobileNo],(error,data)=>{
            //     res.send(result.createResult(error,data))
            // })
        }
        else{
            pool.query(sql,[course_id, email,name, mobile_no],(error,data)=>{
               return res.send(result.createResult(error,data))
            })
        }
    })
})


//change password
router.put("/changepassword", (req, res) => {
    const email = req.headers.email
    const {  newPassword, confirmPassword } = req.body
    const sql = `update users set password = ? where email = ?`
    if (newPassword == confirmPassword) {
         const hashedPass = cryptojs.SHA256(newPassword).toString()
        pool.query(sql, [hashedPass, email], (error, data) => {
            res.send(result.createResult(error, data))
            
        })
    }
    else {
        res.send(result.createResult("Please enter same new password"))
    }
})

//get all registered courses of a student
router.get("/getcourses/:reg_no", (req, res) => {
    const { reg_no } = req.params;

    const sql = `
        select s.name, s.email, s.course_id, s.mobile_no, c.*
        from students s 
        join courses c on s.course_id = c.course_id 
        where s.reg_no = ?`;
        pool.query(sql, [reg_no], (error, data) => {
        res.send(result.createResult(error, data));
    });
});

//get all registered courses of a student along with valid videos
router.get("/getvideos/:reg_no",(req,res)=>{
    const{reg_no}=req.params;
    const sql=`SELECT
    c.course_id,
    c.course_name,
    c.description AS course_description,
    c.fees,
    c.start_date,
    c.end_date,
    c.video_expire_days,

    v.video_id,
    v.title,
    v.description AS video_description,
    v.youtube_url,
    v.added_at

FROM students s
JOIN courses c ON s.course_id = c.course_id
LEFT JOIN videos v ON v.course_id = c.course_id

WHERE s.reg_no = ? 
  AND (
        v.added_at IS NULL
        OR DATE_ADD(v.added_at, INTERVAL c.video_expire_days DAY) >= CURRENT_DATE
      );

`
    pool.query(sql,[reg_no],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

module.exports=router