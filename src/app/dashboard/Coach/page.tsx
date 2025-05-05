'use client';
import CoachUsersSearching from "@/components/ui/dashboard/CoachDashboard/CoachUsersSeaching";

export default function Coach() {
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
      <h1 className="text-2xl font-bold">Coach Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CoachUsersSearching
              backgroundImage=""
              title="Search for Users"
              subtitle="Find users to enter their profiles"
              linkHref="/dashboard/users"
              linkLabel="View All" />
          
      </div>
    </div>
  );
}