import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware(req) {
    // Log the authentication information for debugging
    console.log("look at me", req.kindeAuth);
  },
  {
    isReturnToCurrentPage: true, // Ensures user is redirected back to the current page after login
    loginPage: "/login",         // Redirects unauthenticated users to the login page
    publicPaths: ["/public", "/more"], // Defines public paths that don't require authentication
    isAuthorized: ({ token }) => {
      // Custom authorization logic
      // Allow access if the token has the 'eat:chips' permission
      return token?.permissions?.includes("eat:chips");
    },
  }
);

export const config = {
  matcher: ["/profile"], // Apply this middleware to the /profile route
};
