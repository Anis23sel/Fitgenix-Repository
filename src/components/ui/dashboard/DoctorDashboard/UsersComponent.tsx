import Link from "next/link";

export default function UsersComponent({
  user = 66,
  backgroundImage = "", 
}) {
  return (
    <div
      className="relative text-white rounded-2xl p-6 shadow-2xl w-80 h-48 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundColor: backgroundImage ? undefined : "#4f46e5", // Fallback color
      }}
    >
      
      <div className="absolute inset-0 bg-black  z-0" />

  
      <div className="relative z-10 flex flex-col justify-between h-full">
       
        <div className="text-4xl font-bold italic">{user} User</div>

       
        <div className="text-right">
          <Link href="/dashboard/users">
            <span className="text-sm text-gray-300 hover:text-white underline">View All</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
