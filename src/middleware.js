// middleware.js

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { isAuthenticated } = getKindeServerSession(req);
  const isLoggedIn = await isAuthenticated();

  // If not authenticated, redirect to login page
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/api/auth/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to profile page (or any other paths you need)
export const config = {
  matcher: ['/profile'], // Protect the /profile path
};
