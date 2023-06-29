# Backend - enverx-be-developer-assignment BLOGS CRUD APP

## Technologies Used

- Node.js
- Express
- Mongoose


## Features

 - RESTful API for a simple blog application
 - Node.js and Express.js as the backend framework
 - CRUD (Create, Read, Update, Delete) operations for blog posts
 - Storing the blog posts in a dB
 - Error handling and returning appropriate HTTP status codes using - `Asynchandler and custom-made ErrorHandler`.
 - Data validation using Mongoose Schema

- `GET /posts` - Get all blog posts.
- `GET /posts/:id` - Get a specific blog post by ID (Apply filters like gender, userId, age etc).
- `POST /posts` - Create a new blog post.
- `PUT /posts/:id` - Update an existing blog post.
- `DELETE /posts/:id` - Delete a blog post.
- `GET /filtered-Posts/:filter` - Filter blog by Category

## Development Setup

To set up the backend codebase for development, follow these steps:

1. Clone the repository.
```shell
    git clone https://github.com/abinmuhammed/enverx-be-developer-assignment.git
```
2. Navigate to the backend directory.
3. Install the required dependencies.
```shell
    npm install
```
4. Set up the necessary environment variables.
   - `DB_CONNECTION_STRING` - Connect using a mongoDb Atlas -Connection String
5. Start the backend server.
```shell
    npm Start
```
6. Connect the backend to the MongoDB-Atlas database.

