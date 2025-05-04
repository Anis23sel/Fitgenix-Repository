import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import UserEvent from "./UserEvent";

// Define the type for the fetched data
interface Adherent {
  nom: string;
  prenom: string;
  next_adherent_inbody_rdv: string | null;
}

// Define the type for meetings to display
interface Meeting {
  name: string;
  prenom: string;
  date: string;
  time: string;
  rawDate: Date; // Used for sorting
}

export default function UpcomingMeetings() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      const { data, error } = await supabase
        .from("Adherent")
        .select("nom, prenom, next_adherent_inbody_rdv")
        .not("next_adherent_inbody_rdv", "is", null);

      if (error) {
        console.error("Error fetching meetings:", error.message);
        return;
      }

      const today = new Date();
      const fiveDaysLater = new Date();
      fiveDaysLater.setDate(today.getDate() + 5);

      const filteredMeetings = (data || [])
        .map((record) => {
          const rdv = new Date(record.next_adherent_inbody_rdv!);
          return {
            name: record.nom,
            prenom: record.prenom,
            date: rdv.toLocaleDateString(),
            time: rdv.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }),
            rawDate: rdv,
          };
        })
        .filter((meeting) => {
          return meeting.rawDate >= today && meeting.rawDate <= fiveDaysLater;
        })
        .sort((a, b) => a.rawDate.getTime() - b.rawDate.getTime());

      setMeetings(filteredMeetings);
    };

    fetchMeetings();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-6">
      <h1 className="font-bold text-2xl text-center mb-4">Upcoming Meetings (Next 5 Days)</h1>

      {meetings.length > 0 ? (
        <div className="mt-4 space-y-4">
          {meetings.map((meeting, index) => (
            <UserEvent
              key={index}
              name={meeting.name}
              prenom={meeting.prenom}
              date={meeting.date}
              time={meeting.time}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No upcoming meetings found.</p>
      )}
    </div>
  );
}
