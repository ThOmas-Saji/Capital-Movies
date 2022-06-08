const jwt = require("jsonwebtoken");
const Auth = require("./auth_model");
const createToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_Secret_key);
};

const register = async (req, res) => {
  try {
    let user = await Auth.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("Please try another email id");
    }
    const token = createToken(user);
    user = await Auth.create(req.body);
    return res.status(202).send({ token, user });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    let user = await Auth.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("Email or password is wrong");
    }

    const match = user.checkPassword(req.body.password);
    
    if (!match) {
      return res.status(400).send("Email or password is wrong");
    }
    user.password = "Can't expose !";
    const token = createToken(user);
    return res.status(202).send({ token, user });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { register, login };
