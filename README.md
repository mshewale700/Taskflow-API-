# TaskFlow API

## Project Description
TaskFlow API is a backend task management system built using Node.js and MongoDB.  
It allows users to register, log in, and securely manage their personal tasks by creating, viewing, updating, and deleting them.
This project focuses only on backend development and exposes RESTful APIs that can be consumed by any frontend or mobile application.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- express-validator


##  How to Install and Run the Project
- Install Prerequisites
- Node.js  
- npm 
- MongoDB 
- Check installation: node -v npm -v
- Install Project Dependencies : npm install
- Install Required Dependiencies 
- Configure environment variables
- start the Server
- verify the application running :MongoDB Connected Successfully ...Server running on port 5000

## Test APIs Using Postman
- Use Postman to test APIs:
- Register User → POST /api/auth/register
- Login User → POST /api/auth/login
- Create Task → POST /api/tasks
- Get Tasks → GET /api/tasks
- Update Task → PUT /api/tasks/:id
- Delete Task → DELETE /api/tasks/:id
  
## Assumptions Made
- Each task belongs to exactly one user
- Users can only view and modify their own tasks
- Numeric task IDs are used externally for simplicity
- MongoDB ObjectIds are used internally
- JWT tokens expire after 24 hours
- Frontend implementation is not included in this project


 

