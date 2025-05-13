"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import dayjs from "dayjs";
import AddSportSession from "./AddSportSession";

interface SportSession {
  id: number;
  sport_id: number;
  date: string | null;
  starting_time: string | null;
  ending_time: string | null;
  group_name: string | null;
  sport_name: string;
}

interface Sport {
  id_sport: number;
  name: string;
}

export default function EditSportsTime() {
  const [sports, setSports] = useState<Sport[]>([]);
  const [sessions, setSessions] = useState<SportSession[]>([]);
  const [editingSessionId, setEditingSessionId] = useState<number | null>(null);
  const [form, setForm] = useState<Partial<SportSession>>({});

  useEffect(() => {
    fetchSessions();
    fetchSports();
  }, []);

  const fetchSessions = async () => {
    const { data, error } = await supabase
      .from("SportSession")
      .select(`
        id,
        date,
        starting_time,
        ending_time,
        group_name,
        sport_id,
        Sport:Sport (Name)
      `);

    if (error) {
      console.error("Error fetching sessions:", error);
    } else {
      const sessionsData = (data as any[]).map((session) => ({
        ...session,
        sport_name: session.Sport?.Name ?? "N/A",
      }));
      setSessions(sessionsData);
    }
  };

  const fetchSports = async () => {
    const { data, error } = await supabase
      .from("Sport")
      .select("id_sport, Name");

    if (error) {
      console.error("Error fetching sports:", error);
    } else {
      const sportsData = (data as any[]).map((sport) => ({
        id_sport: sport.id_sport,
        name: sport.Name,
      }));
      setSports(sportsData);
    }
  };

  const handleEdit = (session: SportSession) => {
    setEditingSessionId(session.id);
    setForm({
      date: session.date ?? "",
      starting_time: session.starting_time ?? "",
      ending_time: session.ending_time ?? "",
      group_name: session.group_name ?? "",
    });
  };

  const handleSave = async (session: SportSession) => {
    const { error } = await supabase
      .from("SportSession")
      .update({
        date: form.date,
        starting_time: form.starting_time,
        ending_time: form.ending_time,
        group_name: form.group_name,
      })
      .eq("id", session.id);

    if (error) {
      console.error("Error updating session:", error);
    } else {
      setEditingSessionId(null);
      fetchSessions();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4 p-6 relative">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Sport</th>
            <th className="border p-2 text-left">Date</th>
            <th className="border p-2 text-left">Start</th>
            <th className="border p-2 text-left">End</th>
            <th className="border p-2 text-left">Group</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id} className="border-b hover:bg-gray-50">
              <td className="border p-2">{session.sport_name}</td>
              <td className="border p-2">
                {editingSessionId === session.id ? (
                  <input
                    type="date"
                    name="date"
                    value={form.date || ""}
                    onChange={handleChange}
                    className="w-full border p-1 rounded"
                  />
                ) : (
                  dayjs(session.date).format("YYYY-MM-DD") || "N/A"
                )}
              </td>
              <td className="border p-2">
                {editingSessionId === session.id ? (
                  <input
                    type="time"
                    name="starting_time"
                    value={form.starting_time || ""}
                    onChange={handleChange}
                    className="w-full border p-1 rounded"
                  />
                ) : (
                  session.starting_time?.slice(0, 5) || "N/A"
                )}
              </td>
              <td className="border p-2">
                {editingSessionId === session.id ? (
                  <input
                    type="time"
                    name="ending_time"
                    value={form.ending_time || ""}
                    onChange={handleChange}
                    className="w-full border p-1 rounded"
                  />
                ) : (
                  session.ending_time?.slice(0, 5) || "N/A"
                )}
              </td>
              <td className="border p-2">
                {editingSessionId === session.id ? (
                  <input
                    type="text"
                    name="group_name"
                    value={form.group_name || ""}
                    onChange={handleChange}
                    className="w-full border p-1 rounded"
                  />
                ) : (
                  session.group_name || "N/A"
                )}
              </td>
              <td className="border p-2">
                {editingSessionId === session.id ? (
                  <>
                    <button
                      onClick={() => handleSave(session)}
                      className="bg-green-500 text-white px-4 py-1 rounded mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingSessionId(null)}
                      className="bg-gray-400 text-white px-4 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleEdit(session)}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* AddSportSession component */}
      <AddSportSession sports={sports} />
    </div>
  );
}
