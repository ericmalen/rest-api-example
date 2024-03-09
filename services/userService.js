const dbService = require("./dbService.js");

const postUser = async (user) => {
  // Call to DB service, attempts to insert user in DB.
  const dbResponse = await dbService.postUser(user);

  // Handles DB call failure
  // Modify according to what the DB you are using returns
  if (!dbResponse) {
    console.log("Failed to insert user into database.\n");

    // Throws error to be caught in controller. For demonstration purposes, a generic error thrown here.
    // If an actual error handler is implemented, specific errors should be thrown.
    throw new Error("User insertion failed.");
  }

  // Successful DB call, return response to controller
  console.log("User insertion successful!\n");
  return dbResponse;
};

// Retrieves all users from the database.
// Calls the appropriate method in the DB service to fetch all users.
// Throws an error if the retrieval fails.
// See postUser function for more details
const getUsers = async () => {
  const allUsers = await dbService.getAllUsers();

  if (!allUsers) {
    console.log("Failed to retrieve users from table.\n");
    throw new Error("Users retrieval failed.");
  }

  // Successful retrieval, log and return users to controller
  console.log("Users retrieval successful!\n");
  return allUsers;
};

// Retrieves a specific user from the database based on its ID.
// Calls the appropriate method in the DB service to fetch the user.
// Throws an error if the retrieval fails.
// See postUser function for more details
const getUser = async (id) => {
  const user = await dbService.getUser(id);

  if (!user) {
    console.log("Failed to retrieve user from table.\n");
    throw new Error("User retrieval failed.");
  }

  // Successful retrieval, log and return the user to controller
  console.log("User retrieval successful!\n");
  return user;
};

module.exports = { postUser, getUsers, getUser };
