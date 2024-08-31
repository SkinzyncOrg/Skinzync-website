import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('jwt'); // Directly access the cookie

  const url = req.nextUrl.clone();

  // Redirect authenticated users away from login and signup pages
  if (token && (url.pathname === '/login' || url.pathname === '/signup')) {
    url.pathname = '/'; // Redirect to the home page if authenticated
    return NextResponse.redirect(url);
  }

  // Redirect unauthenticated users from protected routes
  if (!token && url.pathname.startsWith('/protected')) {
    url.pathname = '/login'; // Redirect to the login page if not authenticated
    return NextResponse.redirect(url);
  }

  // Continue with the normal flow
  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/signup', '/protected/:path*'], // Apply the middleware to these routes
};
