const User = require('../../models/User');

const controller = async (req, res) => {
  const users = await User.find();
  res.send(users);
}

module.exports = controller;