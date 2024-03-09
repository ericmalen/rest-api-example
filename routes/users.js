// This file houses all CRUD operations required for the users route.

const express = require("express");
const usersController = require("../controllers/userController.js");

const usersRoute = express.Router();

// Defining routes for users' CRUD operations
usersRoute
  .get("/", usersController.getUsers) // Fetch all users
  .post("/", usersController.postUser) // Add a new user
  .get("/:id", usersController.getUser); // Fetch a specific user by ID

module.exports = usersRoute;
