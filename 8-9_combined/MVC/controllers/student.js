import Student from "../models/Student.js";

// get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    if (!students.length) {
      res.status(200).json({ msg: "No students in the DB" });
    } else {
      res.status(200).json({ students });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get one student
export const getOneStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);

    if (student) {
      return res.status(200).json(student);
    }
    res.status(404).json({ msg: "I could not find that student :(" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a student
export const createStudent = async (req, res) => {
  try {
    const { first_name, last_name, age, email } = req.body;
    const student = await Student.create({ first_name, last_name, age, email });
    res.status(201).json({ msg: "student created successfully", student });
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a student
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, age, email } = req.body;

    const student = await Student.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        age,
        email,
      },
      {
        new: true,
      },
    );

    if (!student) {
      res.status(404).json({ msg: "I could not find that student :(" });
    } else {
      res.status(200).json({ msg: "student updated!", student });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a student
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      res.status(404).json({ msg: "I could not find that student :(" });
    } else {
      res.status(200).json({ msg: "student deleted!", student });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
