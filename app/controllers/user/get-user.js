const User = require('../../models/User');

const controller = async (req, res) => {
  const users = await User.findById(req.params);
  res.send(users);
}

module.exports = controller;