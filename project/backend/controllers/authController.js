const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// In-memory user database (replace with a real database in production)
const users = [
  {
    id: 1,
    username: 'admin',
    // hashed password for 'password123'
    password: '$2a$10$CwTycUXWue0Thq9StjUM0uQxTmxRuOXm3lAZfLpmCKeZiV1LFKkjC',
    name: 'Admin User'
  }
];

// Login controller
exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  // Find user
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET || 'your_jwt_secret',
    { expiresIn: '1h' }
  );
  
  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      name: user.name
    }
  });
};

// Register controller (for future implementation)
exports.register = async (req, res) => {
  const { username, password, name } = req.body;
  
  // Check if user already exists
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  // Create new user
  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword,
    name
  };
  
  users.push(newUser);
  
  // Generate JWT token
  const token = jwt.sign(
    { id: newUser.id, username: newUser.username },
    process.env.JWT_SECRET || 'your_jwt_secret',
    { expiresIn: '1h' }
  );
  
  res.status(201).json({
    token,
    user: {
      id: newUser.id,
      username: newUser.username,
      name: newUser.name
    }
  });
};