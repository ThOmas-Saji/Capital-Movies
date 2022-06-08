const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const authSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

authSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  let hash = bcrypt.hashSync(this.password, 7);
  this.password = hash;
  return next();
});

authSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

const Auth = mongoose.model("auth", authSchema);

module.exports = Auth;
