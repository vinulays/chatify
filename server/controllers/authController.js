const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig");

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User created successfully", username: user.username });
  } catch (error) {
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyValue)[0];
      const message =
        duplicateField === "username"
          ? "Username already exists. Please sign in."
          : "Email address already exists. Please sign in.";
      return res.status(400).json({ message });
    }

    // General error handler
    res.status(500).json({ message: "User creation failed", error });
  }
};

exports.login = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user._id }, jwtConfig.secret, {
    expiresIn: "1h",
  });
  res.json({ token, username: user.username });
};
