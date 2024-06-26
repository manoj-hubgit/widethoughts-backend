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

WideThoughts Backend
This is the backend server for the WideThoughts blog application. It provides RESTful APIs for user authentication, blog post management, and interaction features. The backend is built with Node.js, Express.js, and MongoDB.

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

API Documentation
For detailed API documentation, visit [Postman Documentation](https://documenter.getpostman.com/view/35034228/2sA3drJErB).

Contact
If you have any questions or suggestions, feel free to reach out!

Name: [Manoj](mailto:manojannadurai2265@gmail.com)


