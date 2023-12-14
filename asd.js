// app.js
const express = require('express');
const session = require('express-session');
const app = express();

// Configure express-session middleware
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
    },
    proxy: true,
    unset: 'destroy'
}));

// Your route handler to get information about the current session
app.get('/get-session-info', (req, res) => {
    const sessionId = req.sessionID;

    if (sessionId) {
        res.send(`You are in session with ID: ${sessionId}`);
    } else {
        res.send('No session ID found');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});