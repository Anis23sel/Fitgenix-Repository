import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import UserEvent from "../UpcomingEvents/UserEvent";
import Link from "next/link";

// Define the type for an InBody record
interface Adherent {
  nom: string;
  prenom: string;
}

interface InBodyRecord {
  id: number;
  date: string | null;
  Adherent: Adherent | Adherent[]; // Adherent can be either a single object or an array
}

export default function LastRecords() {
  const [lastRecords, setLastRecords] = useState<InBodyRecord[]>([]);

  useEffect(() => {
    const fetchLastRecords = async () => {
      const { data, error } = await supabase
        .from("InBody")
        .select(`
          id,
          date,
          Adherent (
            nom,
            prenom
          )
        `)
        .order("id", { ascending: false })
        .limit(3); // Only fetch the last 3 records

      if (error) {
        console.error("Error fetching last records:", error);
      } else {
        // Handle cases where Adherent is an array
        setLastRecords(
          (data || []).map((record: any) => ({
            ...record,
            Adherent: Array.isArray(record.Adherent)
              ? record.Adherent[0] // Get the first Adherent if it's an array
              : record.Adherent, // Otherwise just use the Adherent object
          }))
        );
      }
    };

    fetchLastRecords();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* Last Records List */}
    <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
         <h1 className="font-black text-2xl">Last Records</h1>
         <Link href="/dashboard/Doctor/inbody">
         <button className="text-black font-bold hover:underline">See All</button>
         </Link>
      </div>

        {/* Display last records */}
        <div className="bg-white shadow-md rounded-lg p-4">
          {lastRecords.length > 0 ? (
            lastRecords.map((record) => (
              <UserEvent
              key={record.id}
              name={(record.Adherent as Adherent).nom}
              prenom={(record.Adherent as Adherent).prenom}
              date={record.date ? new Date(record.date).toLocaleDateString() : "Invalid date"}
              time={record.date ? new Date(record.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "Invalid time"}
            />
            ))
          ) : (
            <p>No records available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
