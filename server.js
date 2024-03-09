const express = require("express");
const router = require("./routes/routes.js");
const { seed } = require("./db/seed.js");

// seed().catch((err) => {
//   console.error(
//     "An error occurred while attempting to seed the database:",
//     err
//   );
// });

const app = express();

app.use(express.json());
app.use("/", router);

app.listen({ port: 3000 });
