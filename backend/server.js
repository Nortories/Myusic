const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const fs = require("fs");
const { log } = require("console");
const e = require("express");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the JSON file
const dbPath = "./users.json";

const teachdbPath = "./teach.json";

// Create the JSON file if it doesn't exist
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, "[]");
}

if (!fs.existsSync(teachdbPath)) {
  fs.writeFileSync(teachdbPath, "[]");
}

// Read the JSON file
const users = JSON.parse(fs.readFileSync(dbPath));

const teachers = JSON.parse(fs.readFileSync(teachdbPath));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/userlogin", (req, res) => {
  const { username } = req.headers; // Extract the username from the request headers
  console.log("profile user " + username);
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(400).send("User not found");
  }

  const { lastlogin, loggedIn } = user;

  if (Date.now() >= lastlogin + 60000) {
    user.loggedIn = false;
    console.log("User logged out due to inactivity");
  } else {
    lastlogin = Date.now();
  }
  const profileData = {
    username,
    lastlogin,
    loggedIn,
  };

  res.status(200).json(profileData);
});

// Endpoint for user login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user) {
    const teacher = teachers.find((user) => user.username === username);

    let isValidPassword = false;
    if (password === teacher.password) {
      isValidPassword = true;
      console.log("Password Matched");

      teacher.loggedIn = true;
      teacher.lastlogin = Date.now();

      return res.status(220).send("Teacher login successful");
    } else {
      console.log("Password not Matched");
      return res.status(400).send("Invalid username or password");
    }
  }

  let isValidPassword = false;
  if (password === user.password) {
    isValidPassword = true;
    console.log("Password Matched");

    user.loggedIn = true;
    user.lastlogin = Date.now();
    return res.status(200).send("Login successful");
  } else {
    console.log("Password not Matched");
    return res.status(400).send("Invalid username or password");
  }
});

// Endpoint for user registration
app.post("/register", (req, res) => {
  const schedule = [];
  const { username, password, email, address, zipcode, phoneNumber, bio } =
    req.body;
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
    zipcode,
    phoneNumber,
    bio,
    lastlogin: Date.now(),
    loggedIn: false,
    schedule,
  };

  users.push(newUser);

  // Update the JSON file
  fs.writeFileSync(dbPath, JSON.stringify(users));

  res.status(200).send("User registered successfully");
});





// Endpoint for user profile
app.get("/profile", (req, res) => {
  const { username } = req.headers; // Extract the username from the request headers
  console.log("profile user " + username);
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(400).send("User not found");
  }

  const { email, address, zipcode, phoneNumber, bio } = user;

  const profileData = {
    username,
    email,
    address,
    zipcode,
    phoneNumber,
    bio,
  };

  res.status(200).json(profileData);
});











// Endpoint for updating user profile
app.put("/profile", (req, res) => {
  // const { username } = req.headers; // Extract the username from the request headers
  const { registerUsername, email, address, zipcode, phoneNumber, bio } =
    req.body;

  const user = users.find((user) => user.username === registerUsername);

  console.log(users);
  if (!user) {
    console.log(registerUsername);
    console.log("User not found when updating profile");
    return res.status(400).send("User not found");
  }

  // Update the user's profile information
  user.email = email || user.email;
  user.address = address || user.address;
  user.zipcode = zipcode || user.zipcode;
  user.phoneNumber = phoneNumber || user.phoneNumber;
  user.bio = bio || user.bio;

  // Update the JSON file
  fs.writeFileSync(dbPath, JSON.stringify(users));

  res.status(200).send("Profile updated successfully");
});

app.get("/teachProfile", (req, res) => {
  const { username } = req.headers; // Extract the username from the request headers
  console.log("profile user " + username);
  const user = teachers.find((user) => user.username === username);

  if (!user) {
    return res.status(400).send("User not found");
  }

  const { email, address, zipcode, phoneNumber, bio, pricePerLesson, availableOnline, availableInHome, availableToTravel, instrumentsTaught } = user;

  const profileData = {
    username,
    email,
    address,
    zipcode,
    phoneNumber,
    bio,
    pricePerLesson,
    availableOnline,
    availableInHome,
    availableToTravel,
    instrumentsTaught
  };

  res.status(200).json(profileData);
});

app.put("/teachProfile", (req, res) => {
  // const { username } = req.headers; // Extract the username from the request headers
  const { registerUsername, email, address, zipcode, phoneNumber, bio, pricePerLesson, availableOnline, availableInHome, availableToTravel, instrumentsTaught } =
    req.body;

  const user = teachers.find((user) => user.username === registerUsername);
  console.log(teachers);

  if (!user) {
    console.log(registerUsername);
    console.log("User not found when updating profile");
    return res.status(400).send("User not found");
  }

  console.log("availableOnline " + availableOnline);

  // Update the user's profile information
  user.email = email || user.email;
  user.address = address || user.address;
  user.zipcode = zipcode || user.zipcode;
  user.phoneNumber = phoneNumber || user.phoneNumber;
  user.bio = bio || user.bio;
  user.pricePerLesson = pricePerLesson || user.pricePerLesson;
  user.availableOnline = availableOnline || false;
  user.availableInHome = availableInHome || false;
  user.availableToTravel = availableToTravel || false;
  user.instrumentsTaught = instrumentsTaught || user.instrumentsTaught;
  // Update the JSON file
  fs.writeFileSync(teachdbPath, JSON.stringify(teachers));

  res.status(200).send("Profile updated successfully");
});

// Endpoint for checking user session status
app.get("/checkloginstatus", (req, res) => {
  const { username } = req.headers; // Extract the username from the request headers
  console.log("Checking login status for user: " + username);
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(400).send("User not found");
  }

  const { loggedIn } = user;

  const sessionStatus = {
    loggedIn,
  };

  res.status(200).json(sessionStatus);
});

app.get("/getProfileByZipcode", (req, res) => {
  const { zipcode } = req.headers; // Extract the zipcode from the request headers
  console.log("profile user " + zipcode);
  const usersWithPostalCode = users.filter((user) => user.zipcode === zipcode);

  if (usersWithPostalCode.length === 0) {
    return res.status(400).send("No users found with the given zipcode");
  }

  const profileData = usersWithPostalCode.map((user) => {
    const { username, email, address, phoneNumber, bio } = user;
    return {
      username,
      email,
      address,
      phoneNumber,
      bio,
    };
  });

  res.status(200).json(profileData);
});

app.get("/getTeacherByZipcode", (req, res) => {
  const { zipcode } = req.headers; // Extract the zipcode from the request headers
  console.log("Teacher profile users at zip " + zipcode);
  const usersWithPostalCode = teachers.filter(
    (user) => user.zipcode === zipcode
  );

  if (usersWithPostalCode.length === 0) {
    return res.status(400).send("No users found with the given zipcode");
  }

  const profileData = usersWithPostalCode.map((user) => {
    const { username, email, address, phoneNumber, bio } = user;
    return {
      username,
      email,
      address,
      phoneNumber,
      bio,
    };
  });

  res.status(200).json(profileData);
});


app.put("/schedule", (req, res) => {
  const { registerUsername, schedule } = req.body;
  const user = teachers.find((user) => user.username === registerUsername);
  if (!user) {
    return res.status(400).send("User not found");
  }
  console.log("user schedule " + schedule);
  user.schedule.push(schedule); // Add the new schedule to the existing schedule array
  fs.writeFileSync(teachdbPath, JSON.stringify(teachers));
  // console.log("Scheduled update endpoint");

  res.status(200).send("Schedule updated successfully");
});

app.get("/getSchedule", (req, res) => {
  const { registerusername } = req.headers; // Extract the username from the request headers
  console.log("profile user " + registerusername);
  // console.log(req.headers)
  const user = teachers.find((user) => user.username === registerusername);

  if (!user) {
    console.log("User not found when getting schedule");
    return res.status(400).send("User not found");
  }

  const { schedule } = user;

  res.status(200).json(schedule);
});

app.delete("/schedule", (req, res) => {
  const { registerusername, scheduleToCheck } = req.headers; // Extract the username from the request headers
  console.log("schedule user " + registerusername);
  // console.log(req.headers)
  const user = teachers.find((user) => user.username === registerusername);
  if (!user) {
    console.log("User not found when removing schedule");
    return res.status(400).send("User not found");
  }
  const index = user.schedule.findIndex((item) => (item) === JSON.stringify(scheduleToCheck));
  if (index !== -1) {
    user.schedule.splice(index, 1);
    fs.writeFileSync(teachdbPath, JSON.stringify(teachers));
    res.status(200).send("Schedule removed successfully");
  } else {
    res.status(401).send("Schedule not found");
  }
});

app.put("/user/schedule", (req, res) => {
  const { username, schedule } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).send("User not found");
  }
  user.schedule.push(schedule); // Add the new schedule to the existing schedule array
  fs.writeFileSync(dbPath, JSON.stringify(users));
  res.status(200).send("Schedule updated successfully");
});