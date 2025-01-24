// app/profile/page.js

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function ProfilePage() {
  // Check if the user is authenticated using Kinde Auth
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  // If the user is not authenticated, they will be redirected in middleware
  if (!isLoggedIn) {
    // This should never run, since redirection happens in middleware
    return <div>You must be logged in to view this page.</div>;
  }

  // Display the protected content if the user is authenticated
  return (
    <div>
      <h1>Welcome to your profile!</h1>
      <p>This page is protected and only accessible to authenticated users.</p>
    </div>
  );
}
