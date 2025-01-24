import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function middleware(req) {
  const { getUser } = getKindeServerSession(req);
  const user = getUser();

  if (!user) {
    const loginUrl = new URL("/", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next(); // Allow the request to proceed if the user is authenticated
}

export const config = {
  matcher: ["/profile"], // Apply this middleware only to the /profile route
};
