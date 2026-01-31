const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { EXPIRES_IN } = require("../config/jwt");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists)
    return res.status(400).json({ success:false, message:"Email already registered" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashed });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: { id: user._id, name: user.name, email: user.email }
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(401).json({ success:false, message:"Invalid email or password" });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return res.status(401).json({ success:false, message:"Invalid email or password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: EXPIRES_IN
  });

  res.json({ success:true, message:"Login successful", token });
};
