import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the route is an admin route (but not the login page)
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    // Check for the secure admin session cookie
    const session = request.cookies.get('admin_session');

    if (!session || session.value !== 'authenticated') {
      // If not authenticated, redirect to the login page
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ['/admin/:path*'],
};
