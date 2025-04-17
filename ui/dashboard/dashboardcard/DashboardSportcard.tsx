export default function DashboardSportCard({
  sport = "Running",
  sessions = "5 sessions",
  period = "left",
  hasIncreased = true,
  backgroundImage = "", // Optional background image URL
}) {
  return (
    <div
      className="relative text-white rounded-2xl p-6 shadow-2xl w-80 h-48 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundColor: backgroundImage ? undefined : "#4f46e5", // Fallback color
      }}
    >
      {/* ✅ Dark overlay for background image */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* ✅ Content on top of the overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="text-3xl font-bold italic">{sport}</div>
        <div className="text-xl text-gray-200">
          {sessions} <span className="text-xs text-gray-300 italic">({period})</span>
        </div>
      </div>
    </div>
  );
}
