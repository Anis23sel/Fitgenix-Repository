'use client';
import { useState } from "react";
import CoachCard from "@/components/ui/dashboard/dashboardcard/CoachCard";
import InBodyTestTable from "@/components/ui/dashboard/DoctorDashboard/InBodyTestTable";
import DateRangeCalendar from "@/components/ui/dashboard/dashboardcard/DateRangeCalendar";
import UsersTable from "@/components/ui/dashboard/DoctorDashboard/UsersTable";
import SearchBar from "@/components/ui/dashboard/DoctorDashboard/SearchBar";

export default function Doctor() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex justify-between gap-4">
      {/* Left column: CoachCard above, InBodyTestTable below */}
      <div className="flex flex-col">
        <div className="mb-8">
          <CoachCard name="Anis" role="Coach" imageUrl="" />
        </div>
        <div className="max:w-1/2">
          <InBodyTestTable />
        </div>
      </div>

      {/* Middle column: Search + UsersTable */}
      <div className="flex flex-col gap-4">
        <SearchBar onSearch={handleSearch} />
        <UsersTable searchQuery={searchQuery} />
      </div>

      {/* Right column: Calendar */}
      <div>
        <DateRangeCalendar />
      </div>
    </div>
  );
}
