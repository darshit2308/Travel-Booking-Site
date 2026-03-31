const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcrypt');
const User = require('./models/user'); // Adjust the path if necessary

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/testapp')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
app.get('/', (req, res) => res.render('page1'));
app.get('/main', (req, res) => res.render('page2'));
app.get('/about', (req, res) => res.render('aboutUs'));
app.get('/bookings', (req, res) => res.render('bookings'));

app.post('/signup', async (req, res) => {
  const { email1, password1, password2 } = req.body;

  // Basic validation
  if (password1 !== password2) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  const hashedPassword = await bcrypt.hash(password1, 10);

  try {
    const newUser = new User({ email: email1, password: hashedPassword });
    await newUser.save();
    res.redirect('/');
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user._id;
  
        // Log user details
        console.log('User logged in successfully:', {
          email: user.email,
          userId: user._id,
        });
  
        res.redirect('/main'); // Redirect to main page
      } else {
        console.log('Failed login attempt for email:', email);
        res.redirect('/'); // Redirect to login page or show an error
      }
    } catch (err) {
      console.error('Error during login:', err);
      res.redirect('/'); // Handle error and redirect
    }
  });
  

app.get('/get', async (req, res) => {
  try {
    console.log('Fetching all users...');
    const users = await User.find(); // Retrieve all users from the database
    console.log('Users fetched successfully:', users);
    res.json(users); // Send the user data as JSON response
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
