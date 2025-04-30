export default function UserEvent() {
    return (
        <div className="flex justify-between gap-4 m-2">
        <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Name</h3>
            <p className="text-sm text-gray-500">Role</p>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <span className="text-sm text-black">10:00 AM</span>
            <span className="text-sm text-black">2023-10-01</span>
        </div>
        </div>
    );
    }
