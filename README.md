# Login Form with MongoDB Integration

This is a simple login form project with MongoDB integration, built using Node.js, Express, and bcrypt for password hashing. The application allows users to sign in by providing their email and password, which are securely stored in MongoDB.

## Features

- User login form with email and password fields
- Passwords are hashed before being stored in the database using bcrypt
- MongoDB for storing user data

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12 or later)
- npm (v6 or later)
- MongoDB (v4 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JainamBheda/Log-in-Form
   cd Login Form
2. Install the dependencies:
   ```bash
   npm install
3. Ensure that mongodb is running 

## Usage
1. Start the Server
   ```bash
   node app.js
2. Open your web browser and go to http://localhost:3000 to see   the login form.

## Project Structure

login-form-/

├── views/

│   └── index.html   

├── static/

│   └── style.css

│   └── script.js

├── app.js

├── package.json



