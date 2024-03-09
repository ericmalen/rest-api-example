// This file houses all CRUD operations required for the groups route.

const express = require("express");
const groupsController = require("../controllers/groupController.js");

const groupsRoute = express.Router();

// Defining routes for groups' CRUD operations
groupsRoute
  .get("/", groupsController.getGroups) // Fetch all groups
  .post("/", groupsController.postGroup) // Add new group
  .get("/:id", groupsController.getGroup); // Fetch specific group by ID

module.exports = groupsRoute;
