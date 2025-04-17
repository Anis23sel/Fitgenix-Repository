import { ReactNode } from "react";
import Navbar from "../../../ui/dashboard/navbar/Navbar";
import Sidebar from "../../../ui/dashboard/sidebar/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-300">
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 z-50 h-screen w-64 bg-black text-yellow-400 shadow-lg">
        <Sidebar />
      </div>

      {/* Navbar */}
      <div className="bg-black text-yellow-400 sticky top-0 z-40 shadow-lg">
        <Navbar />
      </div>
      

      {/* Main content shifted to the right of fixed sidebar */}
      <div className="flex-1 ml-64 overflow-y-auto p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;



