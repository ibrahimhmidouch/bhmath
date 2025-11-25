// Note: You'll need to install bcryptjs and jsonwebtoken packages
// For now, these are placeholder implementations

// JWT Secret - In production, use environment variable
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d';

// Password hashing (placeholder - requires bcryptjs)
export const hashPassword = async (password) => {
  // Placeholder - replace with actual bcryptjs implementation
  // const bcrypt = require('bcryptjs');
  // return await bcrypt.hash(password, 12);
  
  // Temporary simple hash for development
  return Buffer.from(password).toString('base64');
};

// Password comparison (placeholder - requires bcryptjs)
export const comparePassword = async (password, hashedPassword) => {
  // Placeholder - replace with actual bcryptjs implementation
  // const bcrypt = require('bcryptjs');
  // return await bcrypt.compare(password, hashedPassword);
  
  // Temporary simple comparison for development
  return Buffer.from(password).toString('base64') === hashedPassword;
};

// Generate JWT token (placeholder - requires jsonwebtoken)
export const generateToken = (userId) => {
  // Placeholder - replace with actual jsonwebtoken implementation
  // const jwt = require('jsonwebtoken');
  // return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  
  // Temporary simple token for development
  const payload = {
    userId: userId.toString(),
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60) // 7 days
  };
  
  return Buffer.from(JSON.stringify(payload)).toString('base64');
};

// Verify JWT token (placeholder - requires jsonwebtoken)
export const verifyToken = (token) => {
  try {
    console.log('Verifying token:', token);
    
    // Placeholder - replace with actual jsonwebtoken implementation
    // const jwt = require('jsonwebtoken');
    // return jwt.verify(token, JWT_SECRET);
    
    // Temporary simple verification for development
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    console.log('Decoded token:', decoded);
    
    const now = Math.floor(Date.now() / 1000);
    
    if (decoded.exp < now) {
      throw new Error('Token expired');
    }
    
    if (!decoded.userId) {
      throw new Error('Token missing userId');
    }
    
    return decoded;
  } catch (error) {
    console.error('Token verification error:', error);
    throw new Error('Invalid token');
  }
};

// Generate random token for email verification/password reset
export const generateRandomToken = (length = 32) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Validate password strength
export const validatePassword = (password) => {
  const minLength = 6;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  
  if (password.length < minLength) {
    return { isValid: false, message: `Password must be at least ${minLength} characters long` };
  }
  
  if (!hasUpperCase || !hasLowerCase || !hasNumbers) {
    return { isValid: false, message: 'Password must contain uppercase, lowercase, and numbers' };
  }
  
  return { isValid: true, message: 'Password is strong' };
};

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize user input
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
}; 