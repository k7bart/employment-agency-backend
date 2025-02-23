const authService = require("./auth.service");

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await authService.login(email, password);

  return res.status(200).json(token);
};

const signup = async (req, res) => {
  const { email, password } = req.body;

  const token = await authService.signup(email, password);

  return res.status(201).json(token);
};

module.exports = {
  login,
  signup,
};
