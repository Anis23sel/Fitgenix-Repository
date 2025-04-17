interface Session {
  name: string;
  time: string;
  day: string;
  date: string;
}

export default function TodaySession({ sessions = [] }: { sessions: Session[] }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">This Week's Sessions</h2>

      {sessions.length > 0 ? (
        <div className="flex-1 overflow-y-auto max-h-[300px] space-y-4 pr-1">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-50 p-4 rounded-xl border border-gray-200"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-yellow-600">
                  {session.day}, {session.date}
                </span>
                <span className="text-sm text-gray-500">{session.time}</span>
              </div>
              <div className="text-md text-gray-800 font-medium">{session.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-sm">No sessions this week.</div>
      )}
    </div>
  );
}
