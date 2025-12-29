const jwt = require('jsonwebtoken')

const config = require('./config')
const result = require('./result')

function authStudent(req, res, next) {
    // for ever incoming request this middleware will be called
    const allAllowedUrls = ['/students/register','/user/login']
    if (allAllowedUrls.includes(req.url))
        next()
    else {
        const token = req.headers.token
        if (!token)
            res.send(result.createResult('Token is missing'))
        else {
            try {
                const payload = jwt.verify(token, config.SECRET)
                //req.headers.payload = payload
                //req.headers.course_id = payload.course_id
                req.headers.email = payload.email
                 req.headers.role = payload.role
                next()
            } catch (ex) {
                res.send(result.createResult('Token is Invalid'))
            }
        }
    }
}

function authAdmin(req, res, next) {
    const role = req.headers.role 
    if (role == "admin")
        next()
    else
        res.send(result.createResult("You are not authorized"))
}

module.exports = { authStudent, authAdmin }