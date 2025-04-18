import React from "react";

// Define an interface for the props
interface PackProps {
  sessions?: string;  // Optional, default to "175,000"
  hours?: string;     // Optional, default to "8"
  period?: string;    // Optional, default to "left"
  hasIncreased?: boolean;  // Optional, default to true
}

const Pack: React.FC<PackProps> = ({ 
  sessions = "175,000", 
  hours = "8", 
  period = "left", 
  hasIncreased = true 
}) => {
  return (
    <div className="!bg-indigo-700 border border-indigo-500 text-white rounded-2xl p-6 shadow-xl w-80">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium text-lg">Sessions</span>
      </div>

      {/* Amount */}
      <div className="text-5xl font-extrabold mb-2 tracking-tight">
        {hours}
      </div>

      {/* Details & Status */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <span className={`${hasIncreased ? "text-green-400 font-bold" : "text-red-400 font-bold"}`}>
            {sessions}
          </span>
          <span className="ml-2 text-gray-300">{period}</span>
        </div>
      </div>
    </div>
  );
};

export default Pack;
