const express = require('express');

const studentRouter = require('./routes/students')
const { authStudent, checkAuthorization } = require("./utils/auth");
const userRouter = require('./routes/user')
const courseRouter=require('./routes/course')

const app = express();

// middlewares
app.use(express.json())
app.use(authStudent)

// app.use('/admin/student', adminRouter)
// app.use('/admin/courses', adminRouter)
app.use('/students', studentRouter)
app.use('/user', userRouter)
app.use('/course',courseRouter)

app.listen(4000, 'localhost', () => {
    console.log('Server is running on 4000');
});