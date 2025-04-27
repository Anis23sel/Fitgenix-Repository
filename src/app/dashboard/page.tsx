"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import DashboardSportCard from "@/components/ui/dashboard/dashboardcard/DashboardSportcard";
import NextSession from "@/components/ui/dashboard/dashboardcard/NextSession";
import Mealcard, { FoodItem } from "@/components/ui/dashboard/dashboardcard/Mealcard";
import WeekSessions from "@/components/ui/dashboard/dashboardcard/WeeksSessions";

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
  const [error, setError] = useState<string | null>(null);

  const [sports, setSports] = useState<SportData[]>([]);
  const [breakfastRows, setBreakfastRows] = useState<FoodItem[]>([]);
  const [lunchRows, setLunchRows] = useState<FoodItem[]>([]);
  const [dinnerRows, setDinnerRows] = useState<FoodItem[]>([]);
  const [adherentId, setAdherentId] = useState<number | null>(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.push("/signin");
        return;
      }

      const { data: adherent, error: adherentError } = await supabase
        .from("Adherent")
        .select("id_adherent, nombre_sceance_restantes")
        .eq("email", user.email)
        .single();

      if (adherentError || !adherent) {
        setError(adherentError?.message || "Adherent not found.");
        setLoading(false);
        return;
      }
      setAdherentId(adherent.id_adherent);

      const { data: dietEntries, error: dietError } = await supabase
        .from("Diet")
        .select("meal_type, food(name, calories, fat, carbs, protein)")
        .eq("id_adherent", adherent.id_adherent);

      if (!dietError && dietEntries) {
        setBreakfastRows(
          dietEntries.filter((e: any) => e.meal_type === "breakfast").map((e: any) => e.food as FoodItem)
        );
        setLunchRows(
          dietEntries.filter((e: any) => e.meal_type === "lunch").map((e: any) => e.food as FoodItem)
        );
        setDinnerRows(
          dietEntries.filter((e: any) => e.meal_type === "dinner").map((e: any) => e.food as FoodItem)
        );
      }

      const { data: sportData, error: sportError } = await supabase
        .from("Adherent_sport")
        .select("Sport (Name)")
        .eq("id_adherent", adherent.id_adherent);

      if (!sportError && sportData) {
        setSports(
          sportData.map((item: any) => ({
            sport: item.Sport,
            adherent: { nombre_sceance_restantes: adherent.nombre_sceance_restantes },
          }))
        );
      }

      setLoading(false);
    };

    loadDashboardData();
  }, [router]);

  if (loading) return <div className="flex justify-center items-center min-h-screen"><p className="text-white">Loading dashboard...</p></div>;
  if (error) return <div className="flex justify-center items-center min-h-screen"><p className="text-red-500">{error}</p></div>;

  return (
    <div className="flex justify-between gap-6 mt-6">
      <div className="flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6 w-full">
          {sports.map((item, idx) => (
            <Link key={idx} href={`/dashboard/sports/${encodeURIComponent(item.sport.Name)}`}>
              <DashboardSportCard
                sport={item.sport.Name}
                sessions={`${item.adherent.nombre_sceance_restantes} sessions`}
                period="left"
                hasIncreased={false}
                backgroundImage={`/pictures/Dashboard/Sports/${item.sport.Name}.png`} />
            </Link>
          ))}
          <div className="col-span-2 text-center mt-4">
            <Link href="/dashboard/sport">
              <button className="bg-yellow-400 text-black py-2 px-6 rounded-lg text-lg font-medium hover:bg-yellow-500 transition">View All Sports</button>
            </Link>
          </div>
        </div>

        <Mealcard breakfastRows={breakfastRows} lunchRows={lunchRows} dinnerRows={dinnerRows} />
      </div>

      <div className="w-full sm:w-[300px] lg:w-[350px] flex-shrink-0">
        <div className="mb-6">
          {adherentId && <NextSession adherentId={adherentId} />}
          <div className="mt-6">
          <WeekSessions />
          </div>
        </div>
      </div>
    </div>
  );
}
