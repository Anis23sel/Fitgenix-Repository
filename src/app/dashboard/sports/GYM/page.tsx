import CircularProgress from "../../../../../ui/dashboard/dashboardcard/CircularProgress";
import DateRangeCalendar from "../../../../../ui/dashboard/dashboardcard/DateRangeCalendar";
import TodaySession from "../../../../../ui/dashboard/dashboardcard/TodaySession";
import Statistics from "../../../../../ui/dashboard/dashboardcard/Statistics";
import SessionComponent from "../../../../../ui/dashboard/dashboardcard/SessionComponent";

export default function GYM() {
  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section - Top-left aligned Progress */}
        <div className="rounded-2xl p-6 w-full lg:w-[400px] bg-white shadow-lg">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mt-4">InBody Test Score</h2>
            <div className="self-start flex flex-col items-start">
              <CircularProgress />
              <p className="text-xl font-semibold mt-4">Weight Improvement Over the Month</p>
              <Statistics />
            </div>
          </div>
        </div>

        {/* Right Section - Calendar + Sessions */}
        <div className="bg-white p-4 shadow-lg rounded-2xl">
  <SessionComponent />
</div>

        <div className="w-full lg:w-[400px] space-y-6">
          
          {/* Calendar Section */}
          <div className="bg-white p-4 shadow-lg rounded-2xl">
            <DateRangeCalendar />
          </div>

          {/* Sessions Section */}
          <div className="bg-white p-4 shadow-lg rounded-2xl">
            <h2 className="text-lg font-semibold mb-4">This Week's Sessions</h2>
            <TodaySession
              sessions={[
                { name: "Chest Workout", time: "9:00 AM", day: "Monday", date: "Apr 14" },
                { name: "Leg Day", time: "10:30 AM", day: "Tuesday", date: "Apr 15" },
                { name: "HIIT Cardio", time: "6:00 PM", day: "Wednesday", date: "Apr 16" },
                { name: "Back & Biceps", time: "8:00 AM", day: "Thursday", date: "Apr 17" },
                { name: "Core Training", time: "7:30 AM", day: "Friday", date: "Apr 18" },
                { name: "Active Recovery", time: "11:00 AM", day: "Saturday", date: "Apr 19" },
                { name: "Rest Day", time: "—", day: "Sunday", date: "Apr 20" },
              ]}
            />
          </div>

          {/* Centered Session Component */}
          
        </div>
      </div>
    </div>
  );
}
