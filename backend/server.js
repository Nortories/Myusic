const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the JSON file
const dbPath = './users.json';

// Create the JSON file if it doesn't exist
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, '[]');
}

// Read the JSON file
const users = JSON.parse(fs.readFileSync(dbPath));

// Endpoint for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);

    if (!user) {
        return res.status(400).send('Invalid username or password');
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (isValidPassword) {
        return res.status(200).send('Login successful');
    } else {
        return res.status(400).send('Invalid username or password');
    }
});

// Endpoint for user registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = {
        username,
        password: hash,
    };

    users.push(newUser);

    // Update the JSON file
    fs.writeFileSync(dbPath, JSON.stringify(users));

    res.status(200).send('User registered successfully');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
