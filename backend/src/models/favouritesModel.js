const mongoose = require("mongoose");

const favouritesSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },
    title: { type: String, required: true },
    movie_id: { type: String, required: true },
    poster_path: { type: String, required: true },
    release_date: { type: String },
    vote_average: { type: Number },
    overview: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const Favourites = mongoose.model("favourites", favouritesSchema);

module.exports = Favourites;
