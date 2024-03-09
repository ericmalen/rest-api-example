/**
 * Handles the connection to a PostgreSQL database.
 * Modify this according to the DB you are using.
 * Utilizes environment variables to securely access the database.
 * Exports an SQL client so that the DB service and seed script can perform CRUD operations on the DB.
 * In this example, I was connecting to an AWD RDS database instance.
 */

// const dotenv = require("dotenv");
// const postgres = require("postgres");
// dotenv.config();

// const sql = postgres(
//   `postgres://${process.env.MASTER_USERNAME}:${process.env.MASTER_PASSWORD}@${process.env.RDS_ENDPOINT}:5432/${process.env.RDS_DB_NAME}`
// );

// module.exports = { sql };
