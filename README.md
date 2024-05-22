Rentify
Rentify is a web application that allows users to register, log in, add property listings, and view a list of available properties. The application uses React for the frontend and Node.js with Express for the backend.

Features
User registration and login
Add property listings (only for logged-in users)
View a list of all properties
Installation
Prerequisites
Make sure you have the following installed:

Node.js
npm (Node package manager)
MongoDB

Install Dependencies
Backend
cd backend
npm install
Frontend
cd frontend
npm install

Usage
Running the Backend
cd backend
npm start
The backend server will start on http://localhost:5000.

Running the Frontend
cd frontend
npm start
The frontend development server will start on http://localhost:3000.

Access the Application
Open your browser and go to http://localhost:3000.

API Endpoints
User Routes
POST /api/users/register: Register a new user
POST /api/users/login: Login an existing user
Property Routes
GET /api/properties: Get all properties
POST /api/properties: Add a new property (requires authentication)
Technologies
Frontend: React, Axios, React Router
Backend: Node.js, Express, MongoDB, Mongoose, bcryptjs, jsonwebtoken
CSS: Basic styling with CSS
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a pull request

