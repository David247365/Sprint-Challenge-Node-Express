// const express = require("express");
// const router = express.Router();

// const actions = require("../data/helpers/actionModel");

// router.get("/", (req, res) => {
//   actions
//     .get()
//     .then(action => {
//       res.status(200).json(action);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ message: "There was an error retrieving actions" });
//     });
// });

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   actions
//     .get(id)
//     .then(action => {
//       res.status(200).json(action);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ message: "There was an error retrieving this action" });
//     });
// });

// module.exports = router;
