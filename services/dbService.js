/**
 * The database service is responsible for interacting with the database. Performs all CRUD operations on the DB.
 * For the sake of demonstration, actual database calls are commented out.
 * Placeholder JSON data is returned instead.
 */

//imports db connection
//const { sql } = require("../db/connection.js");

const getAllUsers = () => {
  //return sql`SELECT * FROM users`;
  return [
    {
      id: 1,
      username: "user1",
      email: "user1@example.com",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@example.com",
    },
    {
      id: 3,
      username: "user3",
      email: "user3@example.com",
    },
  ];
};

const postUser = (user) => {
  //return sql`INSERT INTO users ${sql(user, "username", "email", "password")}`;
  return true;
};

const getUser = (id) => {
  //return sql`SELECT * FROM users WHERE id = ${id}`;
  return {
    id: 1,
    username: "example_user",
    email: "user@example.com",
  };
};

const getAllGroups = () => {
  //return sql`SELECT * FROM groups`;
  return [
    {
      id: 1,
      name: "group1",
    },
    {
      id: 2,
      name: "group2",
    },
    {
      id: 3,
      name: "group3",
    },
    {
      id: 4,
      name: "group4",
    },
  ];
};

const postGroup = (group) => {
  //return sql`INSERT INTO groups ${sql(group, "name", "description")}`;
  return true;
};

const getGroup = (id) => {
  //return sql`SELECT * FROM groups WHERE id = ${id}`;
  return {
    id: 1,
    name: "example_group",
  };
};

module.exports = {
  getAllUsers,
  postUser,
  getUser,
  getAllGroups,
  postGroup,
  getGroup,
};
