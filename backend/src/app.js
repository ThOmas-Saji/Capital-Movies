const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const connect = require("./database/connect");

// favourites Control

const favouritesController = require("./controllers/favouritesController");
app.use("/favourites", favouritesController);

//auth Control
const { register, login } = require("./auth/auth_controller");
app.post("/register", register);
app.post("/login", login);

const PORT = process.env.PORT || 9876;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`🚀 Connected on ${PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
