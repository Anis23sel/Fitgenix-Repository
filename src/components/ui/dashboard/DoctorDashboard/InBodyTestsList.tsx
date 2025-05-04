"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const InBodyTestsList = () => {
  const [inBodyTests, setInBodyTests] = useState<any[]>([]);

  useEffect(() => {
    const fetchInBodyTests = async () => {
      const { data, error } = await supabase
        .from("InBody")
        .select("id_inbody, id_adherent, poids, masse_musculaire, masse_grasse, score, date")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching InBody tests:", error);
      } else {
        setInBodyTests(data || []);
      }
    };

    fetchInBodyTests();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">All InBody Tests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {inBodyTests.map(test => (
          <div key={test.id_inbody} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold">User ID: {test.id_adherent}</h3>
            <p><strong>Weight:</strong> {test.poids} kg</p>
            <p><strong>Muscle Mass:</strong> {test.masse_musculaire} kg</p>
            <p><strong>Fat Mass:</strong> {test.masse_grasse} kg</p>
            <p><strong>Score:</strong> {test.score}</p>
            <p><strong>Date:</strong> {new Date(test.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InBodyTestsList;
