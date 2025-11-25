import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

// Routes that require authentication
const protectedRoutes = [
  '/profile',
  '/dashboard',
  '/admin'
];

// Routes that are public but should redirect authenticated users
const authRedirectRoutes = [
  '/login',
  '/register'
];

// Routes that are always public
const publicRoutes = [
  '/api/auth/login',
  '/api/auth/register'
];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  console.log('Middleware processing:', pathname);
  
  // Check if route is always public
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    console.log('Public route, continuing...');
    return NextResponse.next();
  }

  // Check if route should redirect authenticated users
  if (authRedirectRoutes.some(route => pathname.startsWith(route))) {
    console.log('Auth redirect route detected:', pathname);
    const token = request.cookies.get('auth-token')?.value;
    
    if (token) {
      try {
        // Verify token
        const decoded = verifyToken(token);
        console.log('Token verified for auth redirect route, redirecting to home');
        
        // User is authenticated, redirect to home
        return NextResponse.redirect(new URL('/', request.url));
      } catch (error) {
        console.log('Token verification failed for auth redirect route:', error.message);
        // Token is invalid, continue to show login/register
        return NextResponse.next();
      }
    }
    
    // No token, continue to show login/register
    console.log('No auth token found for auth redirect route, continuing...');
    return NextResponse.next();
  }

  // Check if route is protected
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    console.log('Protected route detected:', pathname);
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      console.log('No auth token found, redirecting to login');
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      // Verify token
      const decoded = verifyToken(token);
      console.log('Token verified for protected route:', decoded);
      
      // Add user info to headers for API routes
      if (pathname.startsWith('/api/')) {
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-user-id', decoded.userId);
        
        return NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        });
      }
      
      return NextResponse.next();
    } catch (error) {
      console.log('Token verification failed:', error.message);
      // Token is invalid, redirect to login
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.set('auth-token', '', {
        httpOnly: true,
        maxAge: 0,
        path: '/'
      });
      return response;
    }
  }

  // For API routes that need authentication (like /api/user/profile)
  if (pathname.startsWith('/api/user/')) {
    console.log('User API route detected:', pathname);
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      console.log('No auth token found for API route');
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    try {
      // Verify token
      const decoded = verifyToken(token);
      console.log('Token verified for API route:', decoded);
      
      // Add user info to headers
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', decoded.userId);
      
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.log('Token verification failed for API route:', error.message);
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }
  }

  // For all other routes, continue
  console.log('Other route, continuing...');
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 