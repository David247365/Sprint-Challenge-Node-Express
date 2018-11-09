const express = require("express");

const server = express();

const port = 9000;

server.use(express.json());

// const actionRoutes = require("./actions/actionRoutes.js");
// const projectRoutes = require("./projects/projectRoutes.js");

// server.use("./actions", actionRoutes);
// server.use("./projects", projectRoutes);

server.listen(port, () => console.log(`Server listening on port ${port}`));
