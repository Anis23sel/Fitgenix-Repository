'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { format, startOfWeek, endOfWeek } from 'date-fns';

interface Session {
  name: string;
  date: string;
  day: string;
  time: string;
}

interface WeekSessionsProps {
  adherentId?: number;
}

export default function WeekSessions({ adherentId }: WeekSessionsProps) {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeekSessions() {
      if (!adherentId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      const today = new Date();
      const weekStart = format(startOfWeek(today, { weekStartsOn: 1 }), 'yyyy-MM-dd');
      const weekEnd = format(endOfWeek(today, { weekStartsOn: 1 }), 'yyyy-MM-dd');
      console.log('WeekSessions fetch:', { adherentId, weekStart, weekEnd });

      try {
        // 1. Get all sport IDs linked to this adherent
        const { data: rels, error: relErr } = await supabase
          .from('Adherent_sport')
          .select('id_sport')
          .eq('id_adherent', adherentId);

        console.log('Adherent_sport relations:', rels, relErr);
        if (relErr || !rels || rels.length === 0) {
          setSessions([]);
          setLoading(false);
          return;
        }

        const sportIds = rels.map((r: any) => r.id_sport);

        // 2. Fetch sports occurring this week
        const { data: sports, error: sportError } = await supabase
          .from('Sport')
          .select('Name, Date, Starting_time')
          .in('id_sport', sportIds)
          .gte('Date', weekStart)
          .lte('Date', weekEnd)
          .order('Date', { ascending: true });

        console.log(`Fetched sessions:`, sports, sportError);
        if (sportError) {
          console.error('Error fetching sports:', sportError.message);
          setSessions([]);
        } else {
          const formatted = (sports || []).map((s: any) => ({
            name: s.Name,
            date: s.Date ? format(new Date(s.Date), 'yyyy-MM-dd') : '',
            day: s.Date ? format(new Date(s.Date), 'EEEE') : '',
            time: s.Starting_time
              ? format(new Date(`1970-01-01T${s.Starting_time}`), 'HH:mm')
              : '',
          }));

          setSessions(formatted);
        }
      } catch (err) {
        console.error('Unexpected error in fetchWeekSessions:', err);
        setSessions([]);
      } finally {
        setLoading(false);
      }
    }

    fetchWeekSessions();
  }, [adherentId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <p>Loading sessions...</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">This Week's Sessions</h2>

      {sessions.length > 0 ? (
        <div className="flex-1 overflow-y-auto max-h-[300px] space-y-4 pr-1">
          {sessions.map((session, idx) => (
            <div
              key={idx}
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