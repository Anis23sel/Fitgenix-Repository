"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Signin() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formData;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert("Failed to sign in: " + error.message);
    } else {
      alert("Sign-in successful!");
      router.push("/dashboard");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/pictures/Landingpage/Page1/Landing_page.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="max-w-md mx-auto p-8 border rounded-lg shadow bg-black border-yellow-400 w-full text-white">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input mb-4 p-2 w-full rounded font-black"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            name="password" // Make sure this matches the state key
            placeholder="Password"
            className="input mb-4 p-2 w-full rounded font-black"
            onChange={handleChange}
            value={formData.password} // Make sure this matches the state key
          />
          <button
            type="submit"
            disabled={loading}
            className="btn bg-yellow-400 text-black font-semibold py-2 px-4 w-full rounded hover:bg-yellow-500 transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <button
            onClick={() => router.push('/signup/1')}
            className="text-yellow-400 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
