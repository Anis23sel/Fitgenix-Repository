"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { format } from "date-fns";

interface BookInbodyProps {
  adherentId: number;
}

export default function BookInbody({ adherentId }: BookInbodyProps) {
  const [dateTime, setDateTime] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!dateTime) {
      setMessage("Please select a date and time.");
      return;
    }

    setLoading(true);
    setMessage(null);

    const timestamp = new Date(dateTime);

    const { error } = await supabase
      .from("Adherent")
      .update({ next_adherent_inbody_rdv: timestamp.toISOString() })
      .eq("id_adherent", adherentId);

    if (error) {
      setMessage("Error booking InBody: " + error.message);
    } else {
      setMessage("InBody appointment booked for " + format(timestamp, "PPpp"));
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-3">Book InBody Appointment</h2>

      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        className="w-full border rounded p-2 mb-4"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full transition"
      >
        {loading ? "Booking..." : "Book Now"}
      </button>

      {message && (
        <p className="text-sm text-center mt-2 text-gray-700">{message}</p>
      )}
    </div>
  );
}
