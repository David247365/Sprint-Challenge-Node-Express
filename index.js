const express = require("express");
const server = express();

const actions = require("./data/helpers/actionModel");
const projectM = require("./data/helpers/projectModel");

const port = 9000;

server.use(express.json());

// const actionRoutes = require("./actions/actionRoutes.js");
// const projectRoutes = require("./projects/projectRoutes");

// server.use("./actions", actionRoutes);
// server.use("./projects", projectRoutes);

// =========== Project Endpoints ==============

// Get all projects

server.get("/", (req, res) => {
  projectM
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error retrieving the information" });
    });
});

// Get projects by id

server.get("/:id", (req, res) => {
  const { id } = req.params;
  projectM
    .get(id)
    .then(project => {
      if (project.length) {
        res.status(200).json(project);
      } else {
        res
          .status(400)
          .json({ message: "The project with that Id does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error retirving that project, please try again"
      });
    });
});

// ============== Action Endpoints ==========

server.get("/actions", (req, res) => {
  actions
    .get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error retrieving actions" });
    });
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
