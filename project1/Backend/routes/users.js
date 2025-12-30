const express = require("express");
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

const pool = require("../db/pool");
const result = require("../utils/result");
const config = require("../utils/config");
const { checkAuthorization } = require("../utils/auth");

const router = express.Router();

// router.post("/signin", (req, res) => {
//   const { email, password } = req.body;
//   const hashedPassword = cryptojs.SHA256(password).toString();
//   console.log(hashedPassword)

//   const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;

//   pool.query(sql, [email, hashedPassword], (error, data) => {
//     if (error)  res.send(result.createResult(error));
//     if (data.length === 0)
//       console.log("email:"+email)
//        res.send(result.createResult("Invalid email or password"));

//     const user = data[0];

//     const payload = {
//       email: user.email,
//       role: user.role,
//     };

//     const token = jwt.sign(payload, config.SECRET);

//     const userData = {
//       name: user.name,
//       mobile: user.mobile,
//       token,
//     };

//     res.send(result.createResult(null, userData));
//   });
// });

// // get details
// router.get("/", (req, res) => {
//   const email = req.headers.email;
//   const sql = `SELECT * FROM users WHERE email = ?`;
//   pool.query(sql, [email], (error, data) => {
//     res.send(result.createResult(error, data));
//   });
// });

router.post("/registeruser", (req, res) => {
    const { email, password, role } = req.body;

    // Check if user already exists
    const checkSql = "SELECT * FROM users WHERE email = ?";
    pool.query(checkSql, [email], (error, users) => {

        if (error)
            return res.send(result.createResult(error));

        // If user already exists
        if (users.length > 0) {
            return res.send(result.createResult("Email already registered"));
        }

        // Insert new user
        const insertSql = "INSERT INTO users(email, password, role) VALUES (?, ?, ?)";
        const hashedPass = cryptojs.SHA256(password).toString();

        pool.query(insertSql, [email, hashedPass, role], (error, data) => {
            if (error)
                return res.send(result.createResult(error));

            return res.send(result.createResult(null, "Registration successful"));
        });
    });
});


router.post("/signin", (req, res) => { //pass the token of useradminlogin in students because new course is added by admin only
  const { email, password } = req.body;
  const hashedPassword = cryptojs.SHA256(password).toString();
  //console.log(hashedPassword)

  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;

  pool.query(sql, [email, hashedPassword], (error, data) => {
    if (error) return res.send(result.createResult(error));

    if (data.length === 0) {
      return res.send(result.createResult("Invalid email or password"));
    }

    const user = data[0];

    const payload = {
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, config.SECRET);

    const userData = {
      name: user.name,
      mobile: user.mobile,
      token,
    };

    return res.send(result.createResult(null, userData));
  });
});


// get all users admin only
router.get("/all-students", checkAuthorization, (req, res) => { //pass the token of useradminlogin in students
  const sql = `SELECT * FROM users where role='admin'`;
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

module.exports = router;
