const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const USERS_FILE = path.join(__dirname, '../data/users.json');

const readUsers = () => {
    if (!fs.existsSync(USERS_FILE)) {
        return [];
    }
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
};

const writeUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

router.post('/signup', (req, res) => {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const users = readUsers();

    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'User already exists with this email' });
    }
    const newUser = {
        id: Date.now().toString(),
        fullName,
        email,
        password 
    };

    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, name: newUser.fullName, email: newUser.email } });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const users = readUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ message: 'Login successful', user: { id: user.id, name: user.fullName, email: user.email } });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

module.exports = router;
