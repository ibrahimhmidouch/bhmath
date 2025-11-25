import { NextResponse } from 'next/server';
import { initMongoose } from '@/lib/mongoose';
import User from '@/models/User';
import { comparePassword, generateToken } from '@/lib/auth';

export async function POST(request) {
  try {
    // Initialize MongoDB connection
    await initMongoose();

    // Parse request body
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await User.findOne({ 
      email: email.toLowerCase().trim(),
      isActive: true 
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate JWT token
    const token = generateToken(user._id);

    // Prepare user response (without sensitive data)
    const userResponse = user.toJSON();

    // Set HTTP-only cookie with token
    const response = NextResponse.json(
      {
        message: 'Login successful',
        user: userResponse,
        token: token
      },
      { status: 200 }
    );

    // Set secure cookie (in production, set secure: true and sameSite: 'strict')
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/'
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 