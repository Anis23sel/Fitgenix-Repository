"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function InBodyRecords() {
  const [inbodyTests, setInbodyTests] = useState<any[]>([]);

  useEffect(() => {
    const fetchInbodyTests = async () => {
      const { data, error } = await supabase
        .from("InBody")
        .select(`
          id,
          poids,
          masse_musculaire,
          masse_grasse,
          score,
          date,
          Adherent (
            nom,
            prenom
          )
        `)
        .order("id", { ascending: false });

      if (error) {
        console.error("Error fetching InBody tests:", error);
      } else {
        setInbodyTests(data || []);
      }
    };

    fetchInbodyTests();
  }, []);

  return (
    <div className="p-6">
      <h1 className="font-black text-2xl mb-6">InBody Tests</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md table-auto">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Weight (kg)</th>
            <th className="px-6 py-4">Muscle Mass (kg)</th>
            <th className="px-6 py-4">Fat Mass (kg)</th>
            <th className="px-6 py-4">Score</th>
            <th className="px-6 py-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {inbodyTests.map((test) => (
            <tr key={test.id} className="border-t border-gray-200">
              <td className="px-6 py-4">{test.Adherent ? `${test.Adherent.prenom} ${test.Adherent.nom}` : "Unknown"}</td>
              <td className="px-6 py-4 text-center">{test.poids}</td>
              <td className="px-6 py-4 text-center">{test.masse_musculaire}</td>
              <td className="px-6 py-4 text-center">{test.masse_grasse}</td>
              <td className="px-6 py-4 text-center">{test.score ?? "N/A"}</td>
              <td className="px-6 py-4 text-center">
                {test.date ? new Date(test.date).toLocaleDateString() : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
