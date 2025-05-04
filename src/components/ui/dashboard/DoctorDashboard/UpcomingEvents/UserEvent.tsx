interface UserEventProps {
    name: string;
    date: string;
    time: string;
  }
  
  const UserEvent: React.FC<UserEventProps> = ({ name, date, time }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-gray-800">
            <strong>Name:</strong> {name}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Date:</strong> {date}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Time:</strong> {time}
          </p>
        </div>
      </div>
    );
  };
  
  export default UserEvent;
  