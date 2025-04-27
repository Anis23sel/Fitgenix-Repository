"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface SessionData {
  day: number;
  month: string;
  name: string;
}

interface NextSessionProps {
  adherentId: number;
}

export default function NextSession({ adherentId }: NextSessionProps) {
  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!adherentId) return;

    const loadNextSession = async () => {
      // Today's date string YYYY-MM-DD
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      const todayStr = `${yyyy}-${mm}-${dd}`;

      try {
        // 1. Get sport IDs for the adherent
        const { data: relations, error: relError } = await supabase
          .from("Adherent_sport")
          .select("id_sport")
          .eq("id_adherent", adherentId);

        if (relError || !relations || relations.length === 0) {
          console.error("No sports found or error:", relError);
          setLoading(false);
          return;
        }

        const sportIds = relations.map((r: any) => r.id_sport);

        // 2. Fetch next session from Sport table
        const { data: nextSport, error: sportError } = await supabase
        .from("Sport")
        .select("Name, Date")
        .filter("id_sport", "in", `(${sportIds.join(",")})`) 
        .filter("Date", "gte", todayStr) 
        .order("Date", { ascending: true })
        .limit(1) 
        .maybeSingle();

        if (sportError || !nextSport) {
          console.error("Error fetching next session:", sportError);
        } else {
          const dateObj = new Date(nextSport.Date as string);
          const day = dateObj.getDate();
          const month = dateObj
            .toLocaleString("default", { month: "short" })
            .toUpperCase();

          setSession({ day, month, name: nextSport.Name });
        }
      } catch (err) {
        console.error("Unexpected error loading next session:", err);
      } finally {
        setLoading(false);
      }
    };

    loadNextSession();
  }, [adherentId]);

  const getDaySuffix = (day: number) => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <p>Loading next session...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center p-6">
        <p>No upcoming sessions.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center bg-white text-black font-black p-6 rounded-2xl shadow-md">
      <div className="flex items-end gap-1">
        <h2 className="text-5xl">{session.day}</h2>
        <div className="flex flex-col items-start">
          <p className="text-xs">{getDaySuffix(session.day)}</p>
          <p className="text-sm uppercase">{session.month}</p>
        </div>
      </div>
      <div className="h-20 w-1 bg-black mx-6" />
      <div className="flex flex-col items-center">
        <p className="text-lg leading-tight">
          Next<br />
          Session<br />
          {session.name}
        </p>
      </div>
    </div>
  );
}
