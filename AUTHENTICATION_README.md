# Authentication System for BHMaths

This document explains the authentication system implemented in the BHMaths project.

## Overview

The authentication system provides secure user registration, login, and session management using:

- **MongoDB** for user data storage
- **JWT tokens** for secure authentication
- **HTTP-only cookies** for token storage
- **Password hashing** for security
- **Input validation** and sanitization
- **Protected routes** with middleware

## Features

### ✅ Implemented

- User registration with validation
- User login with JWT tokens
- Secure logout
- Protected routes middleware
- User profile page
- Input validation and sanitization
- Password strength requirements
- Duplicate email/username prevention
- Session management

### 🔄 In Progress

- Password reset functionality
- Email verification
- Role-based access control
- Remember me functionality

### 📋 Planned

- OAuth integration (Google, Facebook)
- Two-factor authentication
- Account deletion
- User preferences

## File Structure

```
src/
├── app/
│   ├── api/auth/
│   │   ├── login/route.js          # Login API endpoint
│   │   ├── register/route.js       # Registration API endpoint
│   │   └── logout/route.js         # Logout API endpoint
│   ├── login/page.js               # Login page
│   ├── register/page.js            # Registration page
│   ├── profile/page.js             # User profile page
│   └── context/
│       └── AuthContext.js          # Authentication context
├── components/
│   └── MainHeader.js               # Header with auth status
├── lib/
│   └── auth.js                     # Authentication utilities
├── models/
│   └── User.js                     # User data model
└── middleware.js                    # Route protection middleware
```

## API Endpoints

### POST /api/auth/register

Register a new user account.

**Request Body:**

```json
{
  "username": "string (3-30 chars)",
  "email": "valid email",
  "password": "string (min 6 chars)"
}
```

**Response:**

```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "user_id",
    "username": "username",
    "email": "email@example.com",
    "role": "student",
    "avatar": "avatar_url",
    "createdAt": "timestamp"
  }
}
```

### POST /api/auth/login

Authenticate user and return JWT token.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "user": {
    /* user object */
  },
  "token": "jwt_token"
}
```

**Cookies Set:**

- `auth-token`: HTTP-only cookie with JWT token

### POST /api/auth/logout

Clear authentication token and logout user.

**Response:**

```json
{
  "message": "Logout successful"
}
```

## User Model

The User model includes:

- **Basic Info**: username, email, password
- **Security**: password hash, verification tokens
- **Profile**: avatar, role, last login
- **Status**: active status, email verification
- **Timestamps**: created, updated, last login

## Security Features

### Password Security

- Minimum 6 characters required
- Stored as hashed values (using bcryptjs)
- Password strength validation

### Token Security

- JWT tokens with expiration (7 days)
- HTTP-only cookies prevent XSS attacks
- Secure cookie settings in production

### Input Validation

- Email format validation
- Username length restrictions
- Input sanitization to prevent XSS
- Duplicate email/username prevention

### Route Protection

- Middleware-based authentication
- Protected route configuration
- Automatic redirect to login

## Setup Instructions

### 1. Install Dependencies

```bash
# Install required packages
npm install bcryptjs jsonwebtoken

# Or with yarn
yarn add bcryptjs jsonwebtoken
```

### 2. Environment Configuration

Copy `env.example` to `.env.local` and configure:

```bash
# MongoDB connection
MONGODB_URI=mongodb://localhost:27017/bhmaths

# JWT secret (change in production!)
JWT_SECRET=your-super-secret-key

# Environment
NODE_ENV=development
```

### 3. Database Setup

Ensure MongoDB is running and accessible at the configured URI.

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
```

## Usage Examples

### Frontend Authentication

```javascript
import { useAuth } from "@/app/context/AuthContext";

function MyComponent() {
  const { user, login, logout, isAuthenticated } = useAuth();

  const handleLogin = async () => {
    try {
      await login("user@example.com", "password");
      // Redirect or update UI
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const handleLogout = async () => {
    await logout();
    // Redirect to home
  };

  if (isAuthenticated()) {
    return <div>Welcome, {user.username}!</div>;
  }

  return <button onClick={handleLogin}>Login</button>;
}
```

### Protected Routes

The middleware automatically protects routes defined in `protectedRoutes` array:

```javascript
// src/middleware.js
const protectedRoutes = ["/profile", "/dashboard", "/admin"];
```

### API Route Protection

For API routes that need authentication:

```javascript
// The middleware automatically adds user ID to headers
export async function GET(request) {
  const userId = request.headers.get("x-user-id");
  // Use userId for user-specific operations
}
```

## Error Handling

The system provides comprehensive error handling:

- **Validation Errors**: Input validation failures
- **Authentication Errors**: Invalid credentials
- **Duplicate Errors**: Email/username already exists
- **Server Errors**: Database or internal errors

All errors return appropriate HTTP status codes and user-friendly messages.

## Production Considerations

### Security

- Change JWT_SECRET to a strong, random string
- Enable HTTPS (secure: true in cookies)
- Set appropriate CORS policies
- Implement rate limiting

### Performance

- Add database indexes for frequent queries
- Implement token refresh mechanism
- Add caching for user data
- Monitor authentication metrics

### Monitoring

- Log authentication attempts
- Track failed login attempts
- Monitor token usage
- Set up alerts for suspicious activity

## Troubleshooting

### Common Issues

1. **"Cannot read property 'login' of undefined"**

   - Ensure component is wrapped in AuthProvider
   - Check import path for useAuth

2. **"MongoDB connection failed"**

   - Verify MongoDB is running
   - Check MONGODB_URI in environment
   - Ensure network connectivity

3. **"JWT verification failed"**

   - Check JWT_SECRET configuration
   - Verify token expiration
   - Clear browser cookies

4. **"Route not protected"**
   - Check middleware configuration
   - Verify route path in protectedRoutes
   - Restart development server

### Debug Mode

Enable debug logging by setting:

```bash
NODE_ENV=development
DEBUG=auth:*
```

## Contributing

When adding new authentication features:

1. Update this README
2. Add appropriate tests
3. Update error handling
4. Document API changes
5. Consider security implications

## License

This authentication system is part of the BHMaths project.
