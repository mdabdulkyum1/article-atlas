import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { isAuthenticated } = getKindeServerSession(req);
  const isLoggedIn = await isAuthenticated();

  // If the user is logged in and trying to access the login page, redirect to profile page
  if (isLoggedIn && req.url.includes('/api/auth/login')) {
    return NextResponse.redirect(new URL('/profile', req.url));
  }

  // If not authenticated, redirect to login page
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/api/auth/login', req.url));
  }

  // Allow the request to proceed if authenticated
  return NextResponse.next();
}

// Apply middleware only to the /profile path
export const config = {
  matcher: ['/profile'],
};
