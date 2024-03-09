/**
 * The controller layer is responsible for processing the requests and calling the appropriate services.
 * No business logic should be in this file, services are in charge of business logic.
 * Responsible for handling incoming requests related to users and coordinating appropriate services.
 */

const userService = require("../services/userService.js");

const postUser = async (req, res) => {
  // Retrieve required data from request
  // In this case, a JSON object containing user details is passed in the request
  const userData = req.body;
  try {
    await userService.postUser(userData);
    res.send({ message: "User successfully added to DB!" });
  } catch (error) {
    // For demonstration purposes only. Error should be appropriately handled by an error handler.
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    // Retrieve all users from service
    const allUsers = await userService.getUsers();

    // Deep copy, also formats the return in proper JSON format
    // May not be necessary - depends on return value from service
    const response = structuredClone(allUsers);

    // Send response to client
    res.send({ allUsers: response });
  } catch (error) {
    // For demonstration purposes only. Error should be appropriately handled by an error handler.
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    // Grab ID from URL parameters
    const id = req.params.id;

    // Retrieve user from service
    const user = await userService.getUser(id);

    // Deep copy, also formats the return in proper JSON format
    // May not be necessary - depends on return value from service
    const response = structuredClone(user);

    // Send response to client
    res.send(response);
  } catch (error) {
    // For demonstration purposes only. Error should be appropriately handled by an error handler.
    console.log(error);
  }
};

module.exports = { postUser, getUsers, getUser };
