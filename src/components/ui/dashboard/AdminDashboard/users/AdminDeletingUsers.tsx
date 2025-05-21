'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdherentManager() {
  const [adherents, setAdherents] = useState<any[]>([]);
  const [filterType, setFilterType] = useState<'nom' | 'prenom' | 'sport'>('nom');
  const [filterValue, setFilterValue] = useState('');
  const [sports, setSports] = useState<any[]>([]);

  useEffect(() => {
    fetchSports();
    fetchAdherents();
  }, []);

  const fetchSports = async () => {
    const { data } = await supabase.from('Sport').select('id_sport, Name');
    setSports(data || []);
  };

  const fetchAdherents = async () => {
    let query = supabase.from('Adherent').select(`
      *,
      Adherent_sport (
        Sport (
          id_sport,
          Name
        )
      )
    `);

    const { data, error } = await query;
    if (!error) setAdherents(data || []);
  };

  const handleDelete = async (id: number) => {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (!confirmed) return;

    await supabase.from('Adherent').delete().eq('id_adherent', id);
    fetchAdherents();
  };

  const filteredAdherents = adherents.filter((user) => {
    const value = filterValue.toLowerCase();
    if (filterType === 'nom') return user.nom.toLowerCase().includes(value);
    if (filterType === 'prenom') return user.prenom.toLowerCase().includes(value);
    if (filterType === 'sport') {
      return user.Adherent_sport?.some((as: any) =>
        as.Sport?.Name.toLowerCase().includes(value)
      );
    }
    return true;
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">User Management</h1>

      {/* Filter Controls */}
      <div className="mb-4 flex gap-4">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as any)}
          className="border p-2 rounded"
        >
          <option value="nom">By Name</option>
          <option value="prenom">By Surname</option>
          <option value="sport">By Sport</option>
        </select>

        <input
          type="text"
          placeholder={`Filter by ${filterType}`}
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className="border p-2 rounded flex-1"
        />
      </div>

      {/* Adherent List */}
      {filteredAdherents.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="space-y-2">
          {filteredAdherents.map((user) => (
            <div
              key={user.id_adherent}
              className="border p-4 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-medium">
                  {user.nom} {user.prenom}
                </p>
                <p className="text-sm text-gray-600">
                  {user.email} · Age: {user.age}
                </p>
                {user.Adherent_sport?.map((s: any) => (
                  <p key={s.Sport?.id_sport} className="text-sm text-blue-600">
                    Sport: {s.Sport?.Name}
                  </p>
                ))}
              </div>
              <button
                onClick={() => handleDelete(user.id_adherent)}
                className="bg-red-500 text-white px-4 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
