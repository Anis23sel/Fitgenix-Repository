import UserComponent from "@/components/ui/dashboard/DoctorDashboard/UsersComponent";
import InBodysComponent from "@/components/ui/dashboard/DoctorDashboard/InBodysComponent";
import UpcomingMeetings from "@/components/ui/dashboard/DoctorDashboard/UpcomingEvents/UpcomingMeetings";

export default function Doctor() {
  return (
    <div className="flex gap-8">
      {/* Left side */}
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="font-black text-2xl">Morning Doc! Glad to have you back</h1>
        </div>

        {/* First Row: Users and InBody */}
        <div className="flex gap-6 mb-8">
          <UserComponent />
          <InBodysComponent />
        </div>

        {/* InBody Tests Title */}
        <div className="mb-4">
          <h1 className="font-black text-2xl">InBody Tests</h1>
        </div>

        {/* Second Row: Users and InBody again if needed (or maybe replace?) */}
        <div className="flex gap-6">
          <UserComponent />
          <InBodysComponent />
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/4 flex-shrink-0">
        <UpcomingMeetings />
      </div>
    </div>
  );
}
