const express = require("express");
const studentRouter = require("./routes/students");
const coursesRouter = require("./routes/course");
const videoRouter = require("./routes/videos");
const userRouter = require("./routes/user")
const {authStudent} = require("./utils/auth")
const cors = require("cors")
//const studRouter = require("./routes/video");

const app = express();
app.use(express.json());
app.use(cors());
app.use(authStudent)
app.use("/students", studentRouter);
app.use("/course", coursesRouter);
app.use("/video", videoRouter);
app.use("/user",userRouter)
//app.use("/stud", studRouter);

app.listen(4000, "localhost", () => {
  console.log("server started at port 4000");
});