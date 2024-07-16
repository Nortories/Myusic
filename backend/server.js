const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');  // Add this line
const app = express();
const port = 3000;

app.use(cors());  // Add this line
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the database
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)");

    // For testing, insert a user (username: test, password: password)
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync('password', salt);
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['test', hash]);
});

// Endpoint for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
        if (err) {
            return res.status(500).send('Internal server error');
        }
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
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Add this endpoint for user registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    db.run("INSERT INTO users (username, password) VALUES (?, ?)", [username, hash], function(err) {
        if (err) {
            return res.status(500).send('Internal server error');
        }
        res.status(200).send('User registered successfully');
    });
});
