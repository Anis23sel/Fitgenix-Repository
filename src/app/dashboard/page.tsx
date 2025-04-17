'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import DashboardSportCard from "../../../ui/dashboard/dashboardcard/DashboardSportcard";
import CircularProgressCountUp from "../../../ui/dashboard/dashboardcard/CircularProgress";
import DateRangeCalendar from "../../../ui/dashboard/dashboardcard/DateRangeCalendar";
import TodaySession from "../../../ui/dashboard/dashboardcard/TodaySession";
import Mealcard from "../../../ui/dashboard/dashboardcard/Mealcard";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Auth check
  // Try using useSession
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.push("/signin");
      } else {
        setLoading(false); // Authenticated, show dashboard
      }
    };

    checkSession();
  }, [router]);

  //const [selectedMeal, setSelectedMeal] = useState("breakfast");

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-white">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-between gap-6 mt-6">
      {/* Main Content: CircularProgress + Sports + Mealcard */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Top Row: CircularProgress + Sports */}
        <div className="flex gap-6">
          {/* Circular Progress */}
          <div className="w-full sm:w-[150px] lg:w-[200px] flex flex-col items-center space-y-6">
            <div className="flex justify-center items-center">
              <CircularProgressCountUp />
            </div>
          </div>

          {/* Sports Cards */}
          <div className="grid grid-cols-2 gap-6 w-full h-full">
            <Link href="/dashboard/sports/GYM">
              <DashboardSportCard
                sport="GYM"
                sessions="5 sessions"
                period="left"
                hasIncreased={true}
                backgroundImage="/pictures/Dashboard/Sports/GYM.jpg"
              />
            </Link>
            <Link href="/dashboard/sports/BASKETBALL">
              <DashboardSportCard
                sport="Basketball"
                sessions="3 sessions"
                period="left"
                hasIncreased={false}
                backgroundImage="/pictures/Dashboard/Sports/Basketball.png"
              />
            </Link>
            <Link href="/dashboard/sports/NATATION">
              <DashboardSportCard
                sport="Swimming"
                sessions="4 sessions"
                period="left"
                hasIncreased={true}
                backgroundImage="/pictures/Dashboard/Sports/Natation.png"
              />
            </Link>
            <Link href="/dashboard/sports/Football">
              <DashboardSportCard
                sport="Football"
                sessions="2 sessions"
                period="left"
                hasIncreased={false}
                backgroundImage="/pictures/Dashboard/Sports/Football.png"
              />
            </Link>
            <div className="col-span-2 text-center mt-4">
              <Link href="/dashboard/sport">
                <button className="bg-yellow-400 text-black py-2 px-6 rounded-lg text-lg font-medium hover:bg-yellow-500 transition">
                  View All Sports
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mealcard below sports */}
        <Mealcard />
      </div>

      {/* Right Sidebar: Calendar + Sessions */}
      <div className="w-full sm:w-[300px] lg:w-[350px] flex-shrink-0">
        <div className="mb-6 bg-white">
          <DateRangeCalendar />
        </div>
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
    </div>
  );
}
