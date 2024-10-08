const User = require("../models/userModel");
require("dotenv").config();


exports.getUser = async (req, res) => {
  const user = await User.findById(req.user);

  res.status(200).json({
    username: user.username,
    id: user._id,
    balance: user.balance,
  });
};
