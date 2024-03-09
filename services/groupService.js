const dbService = require("./dbService.js");

const postGroup = async (group) => {
  // Call to DB service, attempts to insert group in DB.
  const response = await dbService.postGroup(group);

  // Handles DB call failure
  // Modify according to what the DB you are using returns
  if (!response) {
    console.log("Failed to insert group into database.\n");
    // Throws error to be caught in controller. For demonstration purposes, a generic error thrown here.
    // If an actual error handler is implemented, specific errors should be thrown.
    throw new Error("Group insertion failed.");
  }

  // Successful DB call, return response to controller
  console.log("Group insertion successful!\n");
  return response;
};

// Retrieves all groups from the database.
// Calls the appropriate method in the DB service to fetch all groups.
// Throws an error if the retrieval fails.
// See postGroup function for more details
const getGroups = async () => {
  const groups = await dbService.getAllGroups();

  if (!groups) {
    console.log("Failed to retrieve groups from table.\n");
    throw new Error("Group retrieval failed.");
  }

  // Successful retrieval, log and return groups
  console.log("Group retrieval successful!\n");
  return groups;
};

// Retrieves a specific group from the database based on its ID.
// Calls the appropriate method in the DB service to fetch the group.
// Throws an error if the retrieval fails.
// See postGroup function for more details
const getGroup = async (id) => {
  const group = await dbService.getGroup(id);

  if (!group) {
    console.log("Failed to retrieve group from table.\n");
    throw new Error("Group retrieval failed.");
  }

  // Successful retrieval, log and return the group
  console.log("Group retrieval successful!\n");
  return group;
};

module.exports = { postGroup, getGroups, getGroup };
