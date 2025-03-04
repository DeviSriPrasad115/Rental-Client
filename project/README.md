# Backend API for React Application

This is a Node.js/Express backend API that supports the React frontend application.

## Features

- User authentication (login/register) with JWT
- Protected routes for authenticated users
- Content API endpoints

## API Endpoints

### Authentication

- `POST /api/auth/login` - Login with username and password
- `POST /api/auth/register` - Register a new user

### Content

- `GET /api/content` - Get protected content (requires authentication)

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file with the following variables:
   ```
   PORT=5000
   JWT_SECRET=your_secure_jwt_secret_key
   ```

3. Start the server:
   ```
   npm start
   ```

4. For development with auto-restart:
   ```
   npm run dev
   ```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. To access protected routes:

1. Login to get a token
2. Include the token in the Authorization header of subsequent requests:
   ```
   Authorization: Bearer <your_token>
   ```

## Default User

For testing purposes, a default user is included:
- Username: admin
- Password: password123