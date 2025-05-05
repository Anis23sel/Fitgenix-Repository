import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

type UsersSearchingProps = {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  linkHref?: string;
  linkLabel?: string;
};

type Adherent = {
  id_adherent: number;
  nom: string;
  prenom: string;
  email: string;
};

export default function DoctorUsersSearching({
  backgroundImage = "",
  title = "Search for Users",
  subtitle = "",
  linkHref = "/dashboard/users",
  linkLabel = "View All",
}: UsersSearchingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState<Adherent[]>([]);

  useEffect(() => {
    if (!isModalOpen) return;

    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("Adherent")
        .select("id_adherent, nom, prenom, email");

      if (error) {
        console.error("Error fetching users:", error);
        return;
      }

      setUsers(data || []);
    };

    fetchUsers();
  }, [isModalOpen]);

  const filteredUsers = users.filter((user) =>
    `${user.nom} ${user.prenom}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search Component Card */}
      <div
        className="relative text-white rounded-2xl p-6 shadow-2xl w-80 h-48 overflow-hidden bg-cover bg-center cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundColor: backgroundImage ? undefined : "#000000",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="text-4xl font-bold italic">{title}</div>
            {subtitle && <div className="text-sm text-gray-300">{subtitle}</div>}
          </div>

          <div className="text-right">
            <span className="text-sm text-gray-300 hover:text-white underline">
              {linkLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-start p-6 overflow-y-auto">
          <div className="w-full max-w-3xl text-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">Search Users</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white text-xl"
              >
                ✕
              </button>
            </div>

            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded-lg mb-6 text-black"
            />

            <ul className="space-y-4">
              {filteredUsers.map((user) => (
                <li
                  key={user.id_adherent}
                  className="bg-white text-black p-4 rounded-lg shadow hover:bg-gray-100 transition"
                >
                  <div className="font-semibold">
                    {user.nom} {user.prenom}
                  </div>
                  <div className="text-sm text-gray-600">{user.email}</div>
                </li>
              ))}
              {filteredUsers.length === 0 && (
                <p className="text-gray-300">No users found.</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
