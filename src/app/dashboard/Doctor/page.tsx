"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import DoctorUserComponent from "@/components/ui/dashboard/DoctorDashboard/DoctorUsersSearching";
import InBodysComponent from "@/components/ui/dashboard/DoctorDashboard/InBodysComponent";
import UpcomingMeetings from "@/components/ui/dashboard/DoctorDashboard/UpcomingEvents/UpcomingMeetings";
import LastRecords from "@/components/ui/dashboard/DoctorDashboard/LastRecords/LastRecords";
import UsersSearching from "@/components/ui/dashboard/DoctorDashboard/DoctorUsersSearching";
import Link from "next/link";
import Select from "react-select";

export default function Doctor() {
  const [showOverlayForm, setShowOverlayForm] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    weight: "",
    muscleMass: "",
    fatMass: "",
    score: "",
  });

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("Adherent")
        .select("id_adherent, nom, prenom")
        .order("nom", { ascending: true });

      if (error) {
        console.error("Error fetching users:", error);
      } else {
        setUsers(data || []);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.userId) {
      alert("Please select a user.");
      return;
    }

    const poids = parseFloat(formData.weight);
    const masse_musculaire = parseFloat(formData.muscleMass);
    const masse_grasse = parseFloat(formData.fatMass);
    const score = parseInt(formData.score);

    const { data, error } = await supabase.from("InBody").insert([
      {
        id_adherent: parseInt(formData.userId),
        poids,
        masse_musculaire,
        masse_grasse,
        score,
        date: new Date(),
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("InBody test saved:", data);
      setShowOverlayForm(false);
      setFormData({
        userId: "",
        weight: "",
        muscleMass: "",
        fatMass: "",
        score: "",
      });
    }
  };

  return (
    <>
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="font-black text-2xl">Morning Doc! Glad to have you back</h1>
          </div>

          <div className="flex gap-6 mb-8">
            <DoctorUserComponent />
            <UsersSearching
              backgroundImage=""
              title="Search for Users"
              subtitle="Find users to enter their profiles"
              linkHref="/dashboard/users"
              linkLabel="View All"
            />
          </div>

          <div className="mb-4">
            <h1 className="font-black text-2xl">InBody Tests</h1>
          </div>

          <div className="flex gap-6">
            <InBodysComponent
              backgroundImage=""
              subtitle=""
              title="Add a new InBody Test"
              linkLabel="Add"
              onClick={() => setShowOverlayForm(true)}
            />
            <Link href="/dashboard/Doctor/inbody">
              <InBodysComponent
                backgroundImage=""
                title="View All InBody Tests"
                subtitle=""
                linkLabel="Explore"
              />
            </Link>
          </div>

          <div className="mt-4 mb-4">
            <h1 className="font-black text-2xl mb-4">Diet Section</h1>
          </div>
        </div>

        <div className="w-1/4 flex-shrink-0">
          <UpcomingMeetings />
          <LastRecords />
        </div>
      </div>

      {/* Overlay form for InBody test */}
      {showOverlayForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-xl shadow-lg w-full max-w-xl mx-auto space-y-6 relative"
          >
            <button
              type="button"
              onClick={() => setShowOverlayForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold">New InBody Test</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select User</label>
              <Select
                options={users.map((user) => ({
                  value: user.id_adherent,
                  label: `${user.nom} ${user.prenom}`,
                }))}
                onChange={(option) =>
                  setFormData((prev) => ({ ...prev, userId: option?.value || "" }))
                }
                placeholder="Search by name or prenom"
                className="react-select-container"
                classNamePrefix="react-select"
                isClearable
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Muscle Mass (kg)</label>
              <input
                type="number"
                name="muscleMass"
                value={formData.muscleMass}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Fat Mass (kg)</label>
              <input
                type="number"
                name="fatMass"
                value={formData.fatMass}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Score</label>
              <input
                type="number"
                name="score"
                value={formData.score}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowOverlayForm(false)}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
