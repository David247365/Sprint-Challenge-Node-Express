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

server.get("/api/projects", (req, res) => {
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

server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  projectM
    .get(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res
          .status(404)
          .json({ message: "The project with that Id does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error retirving that project, please try again"
      });
    });
});

// Get actions for specified id

server.get("/api/projects/:id/actions", (req, res) => {
  const { id } = req.params;
  projectM
    .getProjectActions(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error" });
    });
});

// Add a new Project

server.post("/api/projects", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json("Please provide both name and description");
  } else if (name.length > 128) {
    res
      .status(400)
      .json({ message: "Name can not be longer than 128 characters" });
  } else {
    projectM
      .insert(req.body)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res.status(500).json({
          message:
            "There was an error creating the project, please try again later"
        });
      });
  }
});

// PUT a project

server.put("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json("Please provide both name and description");
  } else if (name.length > 128) {
    res
      .status(400)
      .json({ message: "Name can not be longer than 128 characters" });
  } else {
    projectM
      .update(id, req.body)
      .then(project => {
        res.status(201).json(req.body);
      })
      .catch(err => {
        res.status(500).json({
          message:
            "There was an error creating the project, please try again later"
        });
      });
  }
});

// Delete a post

server.delete("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  projectM
    .remove(id)
    .then(project => {
      if (project === 0) {
        res
          .status(404)
          .json({ message: "The post with the specified Id does not exist" });
      } else {
        res.status(200).json({ message: `Deleted project with id:${id}` });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error deleting the post, please try again"
      });
    });
});

// ============== Action Endpoints ==========

// get actions for specific id

server.get("api/actions/:id", (req, res) => {
  const { id } = req.params;
  actions
    .get(id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error retrieving actions" });
    });
});

// Post a new action

server.post("/api/actions", (req, res) => {
  const action = req.body;
  if (!action.project_id || !action.description || !action.notes) {
    res
      .status(400)
      .json("Please provide a project id, a description, and notes");
  } else if (action.description.length > 5) {
    res
      .status(400)
      .json({ message: "Name can not be longer than 128 characters" });
  } else {
    actions
      .insert(action)
      .then(action => {
        res.status(201).json(action);
      })
      .catch(err => {
        res.status(500).json({
          message:
            "There was an error creating the project, please try again later"
        });
      });
  }
});

// Put an action

server.put("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  const action = req.body;
  if (!action.project_id || !action.description || !action.notes) {
    res
      .status(400)
      .json("Please provide a project id, a description, and notes");
  } else if (action.description.length > 128) {
    res
      .status(400)
      .json({ message: "Name can not be longer than 128 characters" });
  } else {
    actions
      .update(id, action)
      .then(action => {
        res.status(201).json(action);
      })
      .catch(err => {
        res.status(500).json({
          message:
            "There was an error creating the project, please try again later"
        });
      });
  }
});

// Delete actions

server.delete("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  actions
    .remove(id)
    .then(action => {
      if (action) {
        res.status(200).json({ message: `Deleted action with id:${id}` });
      } else {
        res
          .status(404)
          .json({ message: "Action with specified Id does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({
        message:
          "There was an error deleting the action, please try again later"
      });
    });
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
