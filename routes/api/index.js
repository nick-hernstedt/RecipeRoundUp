const express = require("express");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const recipeController = require("../controllers/bugController");

// API Routes
router.use("/api/", apiRoutes);

router
  .route("/api/recipes")
  .get(recipeController.findAll)
  .post((req, res) => recipeController.create(req, res));

router
  .route("/api/recipes/:id")
  .get(recipeController.findById)
  .put((req, res) => recipeController.update(req, res))
  .delete(recipeController.remove);

// If no API routes are hit,  send the React app

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
