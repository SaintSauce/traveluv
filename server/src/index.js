require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

// Mock user data (replace with actual database operations)
const users = [
    { id: 1, username: 'user1', password: '$2y$10$MBXN.iXHhA4BG6WGogf4L.t.S/clQqKzamk4yVGb2Ik2EmxhjEIYW' } // hashed password for 'password'
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;

//     // Find user by username
//     const user = users.find(u => u.username === username);

//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }

//     // Check encrypted password
//     bcrypt.compare(password, user.password, (err, isMatch) => {
//         if (err) {
//             res.status(500).json({ message: 'Internal server error' });
//         }
//         if (isMatch) {
//             // Create JWT token
//             const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
//             return res.json({ token });
//         } else {
//             res.status(401).json({ message: 'tryna hack me bruh' })
//         }
//     })
// })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})