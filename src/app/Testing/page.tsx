'use client';

import { useEffect, useState } from "react";

export default function TestAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/getUser?email=amineselougha@gmail.com`);
        const data = await response.json();
        

        if (!response.ok) {
          throw new Error(data.error || "Unknown error");
        }

        setUser(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold">User Information</h2>
      {error && <p className="text-red-400">Error: {error}</p>}
      <pre className="mt-2">{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
