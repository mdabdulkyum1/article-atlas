"use client";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-100 text-gray-800">
      <h1 className="text-4xl font-bold">Welcome to your profile!</h1>
      <p className="mt-4 text-lg">This page is protected and only accessible to authenticated users.</p>
    </div>
  );
};

export default Profile;
