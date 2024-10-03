const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/userDB");

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  dob: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model("User", userSchema);

// Registration API
app.post("/api/register", async (req, res) => {
  const { name, dob, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ name, dob, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, "secret_key");
    res.status(200).json({ token, user: { name, dob, email } });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
});

// Login API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, "secret_key");
  res.status(200).json({ token, user: { name: user.name, dob: user.dob, email: user.email } });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
