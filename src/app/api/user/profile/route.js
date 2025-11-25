import { NextResponse } from 'next/server';
import { initMongoose } from '@/lib/mongoose';
import User from '@/models/User';
import { verifyToken } from '@/lib/auth';

// GET user profile
export async function GET(request) {
  try {
    // Get user ID from headers (set by middleware)
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      console.log('Headers received:', Object.fromEntries(request.headers.entries()));
      return NextResponse.json(
        { error: 'Authentication required - User ID not found in headers' },
        { status: 401 }
      );
    }

    await initMongoose();
    
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ user });

  } catch (error) {
    console.error('Get profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT update user profile
export async function PUT(request) {
  try {
    // Get user ID from headers (set by middleware)
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      console.log('Headers received:', Object.fromEntries(request.headers.entries()));
      return NextResponse.json(
        { error: 'Authentication required - User ID not found in headers' },
        { status: 401 }
      );
    }

    await initMongoose();
    
    const body = await request.json();
    const { fullName, schoolLevel, gender, age, phoneNumber } = body;

    // Validate input
    const updateData = {};
    
    if (fullName !== undefined) {
      if (fullName.trim().length === 0) {
        return NextResponse.json(
          { error: 'Full name cannot be empty' },
          { status: 400 }
        );
      }
      updateData.fullName = fullName.trim();
    }

    if (schoolLevel !== undefined) {
      const validLevels = ['collège', 'tronc commun', '1ère bac', '2ème bac'];
      if (!validLevels.includes(schoolLevel)) {
        return NextResponse.json(
          { error: 'Invalid school level' },
          { status: 400 }
        );
      }
      updateData.schoolLevel = schoolLevel;
    }

    if (gender !== undefined) {
      const validGenders = ['male', 'female', 'other', 'prefer not to say'];
      if (!validGenders.includes(gender)) {
        return NextResponse.json(
          { error: 'Invalid gender selection' },
          { status: 400 }
        );
      }
      updateData.gender = gender;
    }

    if (age !== undefined) {
      const ageNum = parseInt(age);
      if (isNaN(ageNum) || ageNum < 5 || ageNum > 100) {
        return NextResponse.json(
          { error: 'Age must be between 5 and 100' },
          { status: 400 }
        );
      }
      updateData.age = ageNum;
    }

    if (phoneNumber !== undefined) {
      if (phoneNumber.trim().length > 0) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
        if (!phoneRegex.test(phoneNumber.trim())) {
          return NextResponse.json(
            { error: 'Please enter a valid phone number' },
            { status: 400 }
          );
        }
        updateData.phoneNumber = phoneNumber.trim();
      } else {
        updateData.phoneNumber = null; // Allow clearing phone number
      }
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Profile updated successfully',
      user: updatedUser
    });

  } catch (error) {
    console.error('Update profile error:', error);
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: validationErrors[0] },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 