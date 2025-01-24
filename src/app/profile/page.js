
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-gray px-4 py-8">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-semibold text-center text-primary">Welcome to your profile!</h1>
        <p className="text-center text-lg text-dark-gray">
          Your username is:{" "}
          <span className="font-semibold text-primary">
            {user?.given_name + " " + user?.family_name || "No username available"}
          </span>
        </p>
        <div className="text-center">
          <button className="px-6 py-2 bg-secondary text-white rounded-full hover:bg-secondary-dark transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
 