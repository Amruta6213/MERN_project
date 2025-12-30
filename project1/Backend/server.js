const express = require('express');
const cors = require('cors');

const studentRouter = require('./routes/students');
const { authStudent, checkAuthorization } = require("./utils/auth");
const userRouter = require('./routes/users');
const courseRouter = require('./routes/course');
const videosRouter = require('./routes/videos');

const app = express();

// CORS — only one time
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// middlewares
//app.use(express.json());
//app.use(authStudent);

// Routes
//app.use('/students', studentRouter);
//app.use('/users', userRouter);
//app.use('/course', courseRouter);
//app.use('/videos', videosRouter);

app.use(express.json());

// Public routes (no auth needed)
app.use('/users', userRouter); // login/register

// Protected routes (auth needed)
app.use(authStudent);           // Only applies below this line
app.use('/students', studentRouter);
app.use('/course', courseRouter);
app.use('/videos', videosRouter);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
