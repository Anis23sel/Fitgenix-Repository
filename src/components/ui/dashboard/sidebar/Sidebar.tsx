"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  User,
  Bell,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { id: "dashboard", label: "Home", icon: LayoutDashboard, link: "/dashboard" },
    { id: "Sports", label: "Sports", icon: User, link: "/dashboard/sports" },
    { id: "Performance", label: "Performance", icon: User, link: "/dashboard/Performance" },
    { id: "InBody Tests", label: "InBody Tests", icon: FileText, link: "/dashboard/InBody" },
    { id: "notification", label: "Notification", icon: Bell, link: "/dashboard/notifications" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-black text-yellow-400 flex flex-col shadow-lg z-50">
      {/* Navigation Items */}
      <nav className="flex flex-col flex-grow py-10 px-4 space-y-12 mt-9">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.link;

          return (
            <Link href={item.link} key={item.id}>
              <div
                className={`rounded-md transition duration-300 ${
                  isActive ? "bg-yellow-400" : "bg-transparent"
                }`}
              >
                <button
                  className={`flex items-center w-full px-4 py-3 rounded-md text-lg transition ${
                    isActive
                      ? "bg-gray-700 text-black"
                      : "hover:bg-gray-800 text-white"
                  }`}
                >
                  <Icon size={22} className="mr-4" />
                  <span>{item.label}</span>
                </button>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Help Button at the Bottom */}
      <div className="px-6 py-6 border-t border-gray-800">
        <button className="flex items-center justify-start w-full px-4 py-3 rounded-md text-lg hover:bg-gray-800 transition">
          <HelpCircle size={22} className="mr-4" />
          <span>Help</span>
        </button>
      </div>
    </div>
  );
}
