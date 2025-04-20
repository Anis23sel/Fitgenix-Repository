"use client";

import { Search, Bell, Monitor, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SearchHeader() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/signin");
  };

  return (
    <header className="bg-black p-4 flex items-center justify-end shadow-md ml-64">
      {/* Icons & Profile */}
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-800 transition">
          <Monitor size={22} className="text-gray-300" />
        </button>
        <button className="relative p-2 rounded-full hover:bg-gray-800 transition">
          <Bell size={22} className="text-gray-300" />
        </button>

        {/* Profile with dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="text-right mr-3">
              <div className="font-semibold text-white">Anis</div>
              <div className="text-sm text-gray-400">Athlete</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center overflow-hidden">
              <img
                src="/api/placeholder/40/40"
                alt="Profile"
                className="rounded-full"
              />
            </div>
          </div>

          {/* Dropdown */}
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
