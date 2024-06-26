WideThoughts Backend
This is the backend server for the WideThoughts blog application. It provides RESTful APIs for user authentication, blog post management, and interaction features.
The backend is built with Node.js, Express.js, and MongoDB.

Features

User Authentication: Sign up or sign in with Google or manually.
CRUD Operations: Create, read, update, and delete blog posts.
Account Management: Delete your account.
Post Interactions: Like, comment on, and share posts.

Technologies

Backend:
Node.js
Express.js

Database:
MongoDB

Authentication:
Google OAuth
JWT (JSON Web Tokens)

Usage
The backend provides RESTful APIs for user authentication, blog post management, and interactions.
Use a tool like Postman to test the endpoints or integrate with the frontend application.


Memory updated
Here's a README template for the backend of your WideThoughts project:

WideThoughts Backend
This is the backend server for the WideThoughts blog application. It provides RESTful APIs for user authentication, blog post management, and interaction features. The backend is built with Node.js, Express.js, and MongoDB.

Table of Contents
Features
Technologies
Installation
Usage
API Endpoints
Contributing
License
Contact
Features
User Authentication: Sign up or sign in with Google or manually.
CRUD Operations: Create, read, update, and delete blog posts.
Account Management: Delete your account.
Post Interactions: Like, comment on, and share posts.
Technologies
Backend:
Node.js
Express.js
Database:
MongoDB
Authentication:
Google OAuth
JWT (JSON Web Tokens)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/WideThoughts-backend.git
cd WideThoughts-backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:

env
Copy code
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
Run the application:

bash
Copy code
npm start
The server should now be running on http://localhost:5000.

Usage
The backend provides RESTful APIs for user authentication, blog post management, and interactions.
Use a tool like Postman to test the endpoints or integrate with the frontend application.

API Endpoints

Authentication
POST /api/auth/register-user
POST /api/auth/login-user
POST /api/auth/google

User 
PUT /api/user/update/:id
DELETE /api/user//delete/:id

Posts
POST /api/post/createpost
POST /api/post/sharepost/:id
POST /api/post/comment/:id
POST /api/post/likepost/:id
GET /api/post/getposts
GET /api/post/userposts
GET /api/post/getpost/:id
PUT /api/post/updatepost/:id
DELETE /api/post/deletepost/:id

Deployed Link
Check out the live backend at [WideThoughts Backend](https://widethoughts-backend.onrender.com/).

