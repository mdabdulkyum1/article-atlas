// src/app/profile/page.js

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function ProfilePage() {
  // The middleware will already protect this route, so you don't need to do additional checks here
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <h1>Welcome to your profile!</h1>
      <p>This page is protected and only accessible to authenticated users.</p>
      <p>Your username is: {user?.name || "No username available"}</p>
    </div>
  );
}
