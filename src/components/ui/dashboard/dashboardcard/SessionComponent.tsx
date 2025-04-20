import { FC } from 'react';

interface Exercise {
  id: number;
  title: string;
  description: string;
}

interface Session {
  date: string;
  exercises: Exercise[];
}

const todaysSession: Session = {
  date: new Date().toLocaleDateString(),
  exercises: [
    {
      id: 1,
      title: 'Push-ups',
      description: 'Do 3 sets of 15 push-ups.',
    },
    {
      id: 2,
      title: 'Squats',
      description: 'Do 3 sets of 20 squats.',
    },
    {
      id: 3,
      title: 'Planks',
      description: 'Hold a plank for 1 minute, 3 times.',
    },
  ],
};

const SessionComponent: FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
        Today's Session - {todaysSession.date}
      </h1>
      <div className="space-y-6">
        {todaysSession.exercises.map((exercise) => (
          <div key={exercise.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">{exercise.title}</h2>
            <p className="text-gray-600">{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionComponent;
