const User = require("../models/user");

// GET ALL USERS
let handleGetUser = async (req, res) => {
  const allDbUsers = await User.find({});
  res.status(200).json(allDbUsers);
};

// GET USER BY ID
let handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  user
    ? res.status(200).json(user)
    : res.status(404).json({ message: "User Not Found" });
};

// CREATE USER
let handleCreateNewUser = async (req, res) => {
  const body = req.body;

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender
  ) {
    res.status(500).json({ message: "Please complete the field" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
  });

  console.log(result);
  res.status(201).json({ message: "user created", id: result._id });
};

// DELETE USER
let handleDeleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: `User at ${req.params.id} successfully deleted` });
};

// UPDATE USER
let handleUpdateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { lastName: req.query.lastname }); //also from body req.body
  res.json({ message: "user successfully updated" });
};

// EXPORT FUNCTIONS (CONTROLLERS)
module.exports = {
  handleGetUser,
  handleGetUserById,
  handleCreateNewUser,
  handleDeleteUser,
  handleUpdateUser,
};
