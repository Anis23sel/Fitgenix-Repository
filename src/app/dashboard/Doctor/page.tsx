import CoachCard from "@/components/ui/dashboard/dashboardcard/CoachCard"
import UsersTable from "@/components/ui/dashboard/DoctorDashboard/UsersTable"
import DateRangeCalendar from "@/components/ui/dashboard/dashboardcard/DateRangeCalendar"

export default function Doctor() {
  return (
    <div className="flex justify-between">
      {/* Left column: CoachCard above, UsersTable below */}
      <div className="flex flex-col">
        <div className="mb-8">
          <CoachCard name="Anis" role="Coach" imageUrl="" />
        </div>
        <div className="max:w-1/2">
          <UsersTable />
        </div>
      </div>

      {/* Right column: Calendar */}
      <div >
        <DateRangeCalendar />
      </div>
    </div>
  )
}
