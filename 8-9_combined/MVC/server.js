import express from "express";
import cors from "cors";
import connectDB from "./dbinit.js";
import student from "./routes/student.js";

const app = express();

connectDB();

const port = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/students", student);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
