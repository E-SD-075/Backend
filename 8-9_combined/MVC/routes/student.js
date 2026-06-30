import express from "express";
import {
  getAllStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.js";

const api = express.Router();

api.route("/").get(getAllStudents).post(createStudent);
api.route("/:id").get(getOneStudent).put(updateStudent).delete(deleteStudent);

export default api;
