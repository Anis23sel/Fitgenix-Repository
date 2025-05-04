interface UserEventProps {
  name: string;
  prenom: string;
  date: string;
  time: string;
}

const UserEvent: React.FC<UserEventProps> = ({ name, prenom, date, time }) => {
  return (
    <div className="flex justify-between items-start bg-gray-50 p-4 rounded-md shadow-sm border">
      {/* Left: prenom over nom */}
      <div className="text-left">
        <p className="text-sm text-gray-500">{prenom}</p>
        <p className="text-lg font-medium text-gray-800">{name}</p>
      </div>

      {/* Right: time over date */}
      <div className="text-right">
        <p className="text-sm font-semibold text-yellow-600">{time}</p>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </div>
  );
};

export default UserEvent;
