const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/login')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});


const User = mongoose.model('User', UserSchema);


app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.post('/signin', async (req, res) => {
  try {
  
    const hashedPassword = await bcrypt.hash(req.body.password, 10); 

   
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword
    });
    
   
    await newUser.save();
    
  
    res.json({ message: 'User signed in successfully!' });
  } catch (err) {
  
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
