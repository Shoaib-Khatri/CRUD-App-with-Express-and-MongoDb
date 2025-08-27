const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// CONTROLLER FUNCTIONS
const {
  handleGetUser,
  handleGetUserById,
  handleCreateNewUser,
  handleDeleteUser,
  handleUpdateUser,
} = require("../controllers/userController");

// ROUTING

// Get ALL USER DATA
router.get("/", handleGetUser);

// Get A SINGLE USER BY ID
router.get("/:id", handleGetUserById);

// CREATE NEW USER
router.post("/", handleCreateNewUser);

// DELETE USER BY ID
router.delete("/:id", handleDeleteUser);

// PARTIALLY UPDATE USER BY ID
router.patch("/:id", handleUpdateUser);

module.exports = router;
