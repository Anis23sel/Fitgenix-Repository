'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function CoachManager() {
  const [coaches, setCoaches] = useState<any[]>([]);
  const [sports, setSports] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    age: null as number | null,
    id_sport: null as number | null,
  });

  useEffect(() => {
    fetchCoaches();
    fetchSports();
  }, []);

  const fetchCoaches = async () => {
    const { data } = await supabase
      .from('Coach')
      .select('*, Sport(id_sport, Name)');
    setCoaches(data || []);
  };

  const fetchSports = async () => {
    const { data } = await supabase.from('Sport').select('*');
    setSports(data || []);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'age' || name === 'id_sport' ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    const { nom, prenom, email, age, id_sport } = form;
    if (!nom || !prenom || !email || !age || !id_sport) return;

    if (editId) {
      await supabase
        .from('Coach')
        .update({ nom, prenom, email, age, id_sport })
        .eq('id_coach', editId);
    } else {
      await supabase.from('Coach').insert([{ nom, prenom, email, age, id_sport }]);
    }

    fetchCoaches();
    resetForm();
  };

  const handleEdit = (coach: any) => {
    setEditId(coach.id_coach);
    setForm({
      nom: coach.nom,
      prenom: coach.prenom,
      email: coach.email,
      age: coach.age,
      id_sport: coach.id_sport,
    });
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Delete this coach?')) {
      await supabase.from('Coach').delete().eq('id_coach', id);
      fetchCoaches();
    }
  };

  const resetForm = () => {
    setForm({ nom: '', prenom: '', email: '', age: null, id_sport: null });
    setEditId(null);
    setShowModal(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Coaches</h1>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add Coach
        </button>
      </div>

      <div className="space-y-2">
        {coaches.map((c) => (
          <div
            key={c.id_coach}
            className="border p-3 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{c.nom} {c.prenom}</p>
              <p className="text-sm text-gray-600">{c.email} · {c.age} years · {c.Sport?.Name}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(c)}
                className="text-sm bg-yellow-400 px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(c.id_coach)}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md space-y-4">
            <h2 className="text-lg font-semibold">
              {editId ? 'Edit Coach' : 'Add Coach'}
            </h2>

            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Nom"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              placeholder="Prénom"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="number"
              name="age"
              value={form.age ?? ''}
              onChange={handleChange}
              placeholder="Age"
              className="w-full border rounded px-3 py-2"
            />
            <select
              name="id_sport"
              value={form.id_sport ?? ''}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select Sport</option>
              {sports.map((s) => (
                <option key={s.id_sport} value={s.id_sport}>
                  {s.Name}
                </option>
              ))}
            </select>

            <div className="flex justify-between mt-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {editId ? 'Update' : 'Add'}
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
