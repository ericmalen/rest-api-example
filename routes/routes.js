// This file serves as the central routing mechanism where all endpoints are defined.
// Actual CRUD operations are handled in the appropriate routers.

const express = require("express");

// Importing dedicated routers for users and groups
const usersRoute = require("./users.js");
const groupsRoute = require("./groups.js");

// Setting up Express router
const router = express.Router();

// Directing URLs to their respective routers
router.use("/users", usersRoute);
router.use("/groups", groupsRoute);

module.exports = router;
