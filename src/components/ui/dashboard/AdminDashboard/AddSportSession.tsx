// components/AddSessionButton.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Sport {
  id_sport: number;
  name: string;
}

export default function AddSportSession({ sports }: { sports: Sport[] }) {
  const [showNewForm, setShowNewForm] = useState(false);
  const [newSessionForm, setNewSessionForm] = useState({
    sport_id: "",
    date: "",
    starting_time: "",
    ending_time: "",
    group_name: "",
  });

  const handleNewSessionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewSessionForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSession = async () => {
    // Validate form data
    if (
      !newSessionForm.sport_id ||
      !newSessionForm.date ||
      !newSessionForm.starting_time ||
      !newSessionForm.ending_time ||
      !newSessionForm.group_name
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Make sure sport_id is a number
    const sport_id = parseInt(newSessionForm.sport_id);
    if (isNaN(sport_id)) {
      alert("Invalid sport selected.");
      return;
    }

    const { error } = await supabase.from("SportSession").insert([
      {
        sport_id,
        date: newSessionForm.date,
        starting_time: newSessionForm.starting_time,
        ending_time: newSessionForm.ending_time,
        group_name: newSessionForm.group_name,
      },
    ]);

    if (error) {
      console.error("Error adding new session:", error);
      alert("There was an error adding the session.");
    } else {
      setShowNewForm(false);
      setNewSessionForm({
        sport_id: "",
        date: "",
        starting_time: "",
        ending_time: "",
        group_name: "",
      });
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowNewForm(true)}
        className="bg-blue-600 text-white py-2 px-6 rounded"
      >
        Add New Sport Session
      </button>

      {showNewForm && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowNewForm(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4">Add New Session</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1">Sport</label>
                  <select
                    name="sport_id"
                    value={newSessionForm.sport_id}
                    onChange={handleNewSessionChange}
                    className="w-full border p-2 rounded"
                  >
                    <option value="">Select Sport</option>
                    {sports.map((sport) => (
                      <option key={sport.id_sport} value={sport.id_sport}>
                        {sport.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={newSessionForm.date}
                    onChange={handleNewSessionChange}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Start Time</label>
                  <input
                    type="time"
                    name="starting_time"
                    value={newSessionForm.starting_time}
                    onChange={handleNewSessionChange}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">End Time</label>
                  <input
                    type="time"
                    name="ending_time"
                    value={newSessionForm.ending_time}
                    onChange={handleNewSessionChange}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Group Name</label>
                  <input
                    type="text"
                    name="group_name"
                    value={newSessionForm.group_name}
                    onChange={handleNewSessionChange}
                    className="w-full border p-2 rounded"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => setShowNewForm(false)}
                  className="bg-gray-400 text-white px-6 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSession}
                  className="bg-green-500 text-white px-6 py-2 rounded"
                >
                  Add Session
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
