const mongoose = require("mongoose");

// SCHEMA
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// CREATE MODEL (AND USE SCHEMA)
const User = mongoose.model("user", userSchema);

module.exports = User;
