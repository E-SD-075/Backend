import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minLength: [2, "min length is 2 chars"],
    maxLength: [50, "max length is 50 chars"],
  },
  last_name: {
    type: String,
    required: true,
    minLength: [2, "min length is 2 chars"],
    maxLength: [50, "max length is 50 chars"],
  },
  age: {
    type: Number,
    required: true,
    min: 6,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please use a valid email address",
    ],
  },
});

export default mongoose.model("Student", StudentSchema);
