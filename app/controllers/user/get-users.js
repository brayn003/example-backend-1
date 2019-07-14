const User = require('../../models/User');

const controller = async (req, res) => {
  console.log(req.query);
  const users = await User.find(req.query);
  res.send(users);
}

module.exports = controller;