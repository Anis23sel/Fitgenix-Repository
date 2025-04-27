'use client';
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import NextSession from "@/components/ui/dashboard/dashboardcard/NextSession";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface UserData {
  id_adherent: number;
  nom: string;
  prenom: string;
  email: string;
}

export default function AllUsersPage() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("Adherent")
        .select("id_adherent, nom, prenom, email");

      if (error) {
        setError(error.message);
      } else {
        setUsers(data as UserData[]);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users…</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex ">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">All Users</h1>
        <ul className="list-disc pl-5 space-y-2">
          {users.map((u) => (
            <li key={u.id_adherent}>
              {u.nom} {u.prenom} — <span className="font-mono">{u.email}</span>
            </li>
          ))}
        </ul>
      </div>
      <NextSession />
    </div>
  );
}
