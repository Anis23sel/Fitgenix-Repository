import React from "react";

type CoachCardProps = {
    name: string;
    role: string;
    imageUrl: string;
};

const CoachCard: React.FC<CoachCardProps> = ({ name, role, imageUrl }) => {
    return (
        <div className="flex items-center bg-gradient-to-r from-yellow-400 to-white text-white rounded-2xl shadow-lg p-6 w-full max-w-md hover:scale-105 transform transition-transform duration-300">
            {/* Profile Picture */}
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                <img
                    src={imageUrl}
                    alt={`${name}'s profile`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info Section */}
            <div className="ml-6">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-lg opacity-90">{role}</p>
                <button className="mt-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default CoachCard;
