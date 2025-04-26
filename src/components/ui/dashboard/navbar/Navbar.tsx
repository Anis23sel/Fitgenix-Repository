"use client";

import { Bell, Monitor, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient"; // Make sure this is correctly set up

interface UserProfile {
  prenom: string;
  role: string;
}

export default function SearchHeader() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Get the currently logged-in user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        

        if (userError || !user) {
          console.error("Error fetching user:", userError);
          router.push("/signin"); // Redirect to sign-in page if no user
          return;
        }

        console.log("Logged-in user email:", user.email);

        // Fetch the profile from the "Adherent" table using the email of the logged-in user
        const { data: Adherent, error } = await supabase
        .from("Adherent")
        .select("prenom, role, email")
        .ilike("email", user.email ?? "")  // Case-insensitive match
        .single();


        if (error) {
          // Improved error handling
          const errorMessage = typeof error === "string" ? error : error?.message || "Unknown error";
          console.error("Error fetching user profile from Adherent table:", errorMessage);
          return;
        }

        if (!Adherent) {
          console.warn("No matching user profile found in Adherent table.");
          setUserProfile({
            prenom: "Unknown",
            role: "Athlete", // Default role
          });
          return;
        }

        console.log("Fetched Adherent data:", Adherent);

        // Set user profile state
        setUserProfile({
          prenom: Adherent.prenom || "Unknown",
          role: Adherent.role || "Athlete", // Default to "Athlete" if no role is found
        });

        console.log('User profile set:', { prenom: Adherent.prenom, role: Adherent.role });

      } catch (err) {
        console.error("Unexpected error fetching user profile:", err);
      }
    };

    fetchUserProfile();
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/signin");
  };

  return (
    <header className="bg-black p-4 flex items-center justify-end shadow-md ml-64">
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-800 transition">
          <Monitor size={22} className="text-gray-300" />
        </button>
        <button className="relative p-2 rounded-full hover:bg-gray-800 transition">
          <Bell size={22} className="text-gray-300" />
        </button>
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="text-right mr-3">
              <div className="font-semibold text-white">
                {userProfile?.prenom || "Loading..."}
              </div>
              <div className="text-sm text-gray-400">
                {userProfile?.role || "Loading..."}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center overflow-hidden">
              <img
                src="/api/placeholder/40/40"
                alt="Profile"
                className="rounded-full"
              />
            </div>
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
