import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { isAuthenticated } = getKindeServerSession(req);
  const isLoggedIn = await isAuthenticated();
  console.log(isLoggedIn);

  // If user is not logged in, redirect to the login page
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/api/auth/login', req.url));
  }

  // If user is logged in, proceed to the next step (don't redirect)
  return NextResponse.next();
}

// Apply the middleware only to the profile page
export const config = {
  matcher: ['/profile'],
};
