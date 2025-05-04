import { useState, useEffect } from "react";
import UserEvent from "./UserEvent";
import Date from "./Date"; 

interface Meeting {
  name: string;
  date: string;
  time: string;
}

export default function UpcomingMeetings() {
  const [meetings, setMeetings] = useState<Meeting[]>([]); // Proper type for meetings
  const [selectedDate, setSelectedDate] = useState<string>(''); // Initial empty string

  useEffect(() => {
    // Logic to fetch the meetings for the selected date
    const fetchMeetings = async () => {
      // Example API call or filtering logic based on selectedDate
      const fetchedMeetings: Meeting[] = [
        { name: 'Meeting 1', date: '2025-05-05', time: '10:00 AM' },
        { name: 'Meeting 2', date: '2025-05-05', time: '02:00 PM' },
        { name: 'Meeting 3', date: '2025-05-06', time: '09:00 AM' },
      ];
      
      const filteredMeetings = fetchedMeetings.filter((meeting) => meeting.date === selectedDate);
      setMeetings(filteredMeetings);
    };

    if (selectedDate) {
      fetchMeetings();
    }
  }, [selectedDate]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-6">
      <h1 className="font-bold text-2xl text-center mb-4">Upcoming Meetings</h1>
      
      {/* Date Selector Component */}
      <Date onDateChange={setSelectedDate} /> {/* Using the onDateChange prop correctly */}

      {/* Display the meetings */}
      {meetings.length > 0 ? (
        <div className="mt-4 space-y-4">
          {meetings.map((meeting, index) => (
            <UserEvent
              key={index}
              name={meeting.name}
              date={meeting.date}
              time={meeting.time}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No meetings for this day.</p>
      )}
    </div>
  );
}
