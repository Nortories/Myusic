const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the JSON file
const dbPath = "./users.json";

// Create the JSON file if it doesn't exist
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, "[]");
}

// Read the JSON file
const users = JSON.parse(fs.readFileSync(dbPath));

// Endpoint for user login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(400).send("Invalid username or password");
  }

  let isValidPassword = false;
   if (password === user.password)
    {
        isValidPassword = true;
      console.log("Password Matched");

    }
    if (isValidPassword) {
        console.log("valid password");
        return res.status(200).send("Login successful");
  } else {
    console.log("Password not Matched");
    return res.status(400).send("Invalid username or password");
  }
});

// Endpoint for user registration
app.post("/register", (req, res) => {
  const { username, password, email, address, phoneNumber, bio } = req.body;
  if (!username || !password) {
    return res.status(400).send("Invalid username or password");
  }
  if (password.length < 6) {
    return res.status(400).send("Password must be at least 6 characters long");
  }
  if (username.length < 3) {
    return res.status(400).send("Username must be at least 3 characters long");
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    return res.status(400).send("Username already taken");
  }

  const newUser = {
    username,
    password,
    email,
    address,
    phoneNumber,
    bio,
  };

  users.push(newUser);

  // Update the JSON file
  fs.writeFileSync(dbPath, JSON.stringify(users));

  res.status(200).send("User registered successfully");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Endpoint for user profile
app.get("/profile", (req, res) => {
  const { username } = req.headers; // Extract the username from the request headers
  console.log("profile user " + username);
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(400).send("User not found");
  }

  const { email, address, phoneNumber, bio } = user;

  const profileData = {
    username,
    email,
    address,
    phoneNumber,
    bio,
  };

  res.status(200).json(profileData);
});

// Endpoint for updating user profile
app.put("/profile", (req, res) => {
    const { username } = req.headers; // Extract the username from the request headers
    const { email, address, phoneNumber, bio } = req.body;

    const user = users.find((user) => user.username === username);

    if (!user) {
        return res.status(400).send("User not found");
    }

    // Update the user's profile information
    user.email = email || user.email;
    user.address = address || user.address;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.bio = bio || user.bio;

    // Update the JSON file
    fs.writeFileSync(dbPath, JSON.stringify(users));

    res.status(200).send("Profile updated successfully");
});
