/**
 * The controller layer is responsible for processing the requests and calling the appropriate services.
 * No business logic should be in this layer, services are in charge of business logic.
 * Responsible for handling incoming requests related to groups and coordinating appropriate services.
 */

const groupService = require("../services/groupService.js");

const postGroup = async (req, res) => {
  //Retrieve required data from request
  //In this case a JSON object containing a groups array is passed in the request
  const groupsArray = req.body.groups;
  try {
    await groupService.postGroup(groupsArray);
    res.send({ message: "Group successfully added to DB!" });
  } catch (error) {
    //For demonstration purpose only. Error should be appropriately handled by an error handler.
    console.log(error);
  }
};

const getGroups = async (req, res) => {
  try {
    //Retrieve all groups from service
    const allGroups = await groupService.getGroups();

    //Deep copy, also formats the return in proper JSON format
    //May not be necessary - depends on return value from service
    const response = structuredClone(allGroups);

    //Send response to client
    res.send({ allGroups: response });
  } catch (error) {
    //For demonstration purpose only. Error should be appropriately handled by an error handler.
    console.log(error);
  }
};

const getGroup = async (req, res) => {
  try {
    //Grab ID from URL parameters
    const id = req.params.id;

    //Retrieve group from service
    const group = await groupService.getGroup(id);

    //Deep copy, also formats the return in proper JSON format
    //May not be necessary - depends on return value from service
    const response = structuredClone(group);

    //Send response to client
    res.send(response);
  } catch (error) {
    //For demonstration purpose only. Error should be appropriately handled by an error handler.
    console.log(error);
  }
};

module.exports = { postGroup, getGroups, getGroup };
