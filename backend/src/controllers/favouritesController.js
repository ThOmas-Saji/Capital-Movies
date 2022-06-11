const express = require("express");
const router = express.Router();
const Favourites = require("../models/favouritesModel");

router.get("/:id", async (req, res) => {
  try {
    const favourites = await Favourites.find({user_id: req.params.id})
    return res.status(201).send(favourites);
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.post("/one", async (req, res) => {
  try {
    const favourite = await Favourites.findOne({
      $and: [{ user_id: req.body.user_id }, { movie_id: req.body.id }],
    });
    return res.status(201).send(favourite);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const favourite = await Favourites.create(req.body);
    return res.status(201).send(favourite);
  } catch (err) {
    return res.status(500).send(err.name);
  }
});

router.post("/delete", async (req, res) => {
  try {
    const favourite = await Favourites.findOneAndDelete({
      $and: [{ user_id: req.body.user_id }, { movie_id: req.body.id }],
    });
    return res.status(201).send(favourite);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const favourite = await Favourites.findOneAndDelete(req.body.id);
    return res.status(201).send(favourite);
  } catch (err) {
    return res.status(500).send(err.name);
  }
});

module.exports = router;
