import CircularProgress from "@/components/ui/dashboard/dashboardcard/CircularProgress";
import DateRangeCalendar from "@/components/ui/dashboard/dashboardcard/DateRangeCalendar";
import WeeksSession from "@/components/ui/dashboard/dashboardcard/WeeksSessions";
import Statistics from "@/components/ui/dashboard/dashboardcard/Statistics";
import SessionComponent from "@/components/ui/dashboard/dashboardcard/SessionComponent";

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
            <h2 className="text-lg font-semibold mb-4">This Week Sessions</h2>
            <WeeksSession />
          </div>

          {/* Centered Session Component */}
          
        </div>
      </div>
    </div>
  );
}
