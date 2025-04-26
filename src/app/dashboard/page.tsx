"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import DashboardSportCard from "@/components/ui/dashboard/dashboardcard/DashboardSportcard";
import CircularProgressCountUp from "@/components/ui/dashboard/dashboardcard/CircularProgress";
import TodaySession from "@/components/ui/dashboard/dashboardcard/TodaySession";
import Mealcard from "@/components/ui/dashboard/dashboardcard/Mealcard";

interface SportData {
  sport: {
    Name: string;
  };
  adherent: {
    nombre_sceance_restantes: number;
  };
}

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sports, setSports] = useState<SportData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUserSports = async () => {
      // Step 1: Get the signed-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.push("/signin");
        return;
      }

      // Step 2: Get adherent info from their email
      const { data: adherentData, error: adherentError } = await supabase
        .from("Adherent")
        .select("id_adherent, nombre_sceance_restantes")
        .eq("email", user.email)
        .single();

      if (adherentError || !adherentData) {
        console.error("Error fetching adherent:", adherentError);
        setError(adherentError?.message || "Adherent not found.");
        setLoading(false);
        return;
      }

      // Step 3: Get sports linked to the adherent
      const { data: sportData, error: sportError } = await supabase
        .from("Adherent_sport")
        .select("Sport (Name)")
        .eq("id_adherent", adherentData.id_adherent);

      if (sportError) {
        console.error("Error fetching sports:", sportError);
        setError(sportError.message);
        setLoading(false);
        return;
      }

      // Step 4: Combine sport data with adherent's remaining sessions
      const combinedData = (sportData || []).map((item: any) => ({
        sport: item.Sport,
        adherent: {
          nombre_sceance_restantes: adherentData.nombre_sceance_restantes,
        },
      }));

      setSports(combinedData);
      setLoading(false);
    };

    loadUserSports();
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-white">Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (sports.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-white">No sports data available.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-between gap-6 mt-6">
      <div className="flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6 w-full">
          {sports.map((item, idx) => (
            <Link
              key={idx}
              href={`/dashboard/sports/${encodeURIComponent(item.sport.Name)}`}
            >
              <DashboardSportCard
                sport={item.sport.Name}
                sessions={`${item.adherent.nombre_sceance_restantes} sessions`}
                period="left"
                hasIncreased={false}
                backgroundImage={`/pictures/Dashboard/Sports/${item.sport.Name}.png`}
              />
            </Link>
          ))}
          <div className="col-span-2 text-center mt-4">
            <Link href="/dashboard/sport">
              <button className="bg-yellow-400 text-black py-2 px-6 rounded-lg text-lg font-medium hover:bg-yellow-500 transition">
                View All Sports
              </button>
            </Link>
          </div>
        </div>
        <Mealcard />
      </div>
      <div className="w-full sm:w-[300px] lg:w-[350px] flex-shrink-0">
        <div className="mb-6">
          <CircularProgressCountUp />
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
