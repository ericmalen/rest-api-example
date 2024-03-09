/**
 * Seed script for initializing the database tables for users and groups.
 * Creates necessary tables if they don't exist, truncates them to remove existing data and sets the appropriate table owners.
 * This was done as part of an assignment, needed to clear the tables to pass the tests.
 * This script is intended to be run once to initialize the database with sample data.
 * It utilizes the SQL client provided by the connection module to execute database queries.
 * Function called in server.js on server start up.
 */

// const { sql } = require("./connection.js");

// const seed = async () => {
//   try {
//     // Create necessary tables if they don't exist
//     await sql`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(100) NOT NULL,
//         email VARCHAR(100) NOT NULL,
//       )`;

//     await sql`
//       CREATE TABLE IF NOT EXISTS groups (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(100) NOT NULL,
//       )`;

//     // Truncate tables to remove existing data
//     await sql`TRUNCATE TABLE users, groups`;

//     // Set appropriate table owners
//     await sql`ALTER TABLE users OWNER TO postgres_a2`;
//     await sql`ALTER TABLE groups OWNER TO postgres_a2`;

//     console.log("DB seed successful!");
//   } catch (error) {
//     console.error("DB seed failed:", error);
//   }
// };

// module.exports = { seed };
