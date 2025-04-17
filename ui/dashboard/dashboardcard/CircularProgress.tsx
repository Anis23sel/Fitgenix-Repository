'use client';

import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import { useCountUp } from 'use-count-up';

export default function CircularProgressCountUp() {
  const { value } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 93,
  });

  return (
    <div className="flex  items-center h-full flex-col">
      <Stack
        spacing={2}
        sx={{
          alignItems: 'center',
          '--CircularProgress-size': '160px',
        }}
      >
        <CircularProgress
          determinate
          value={value as number}
          thickness={6}
          sx={{
            '--CircularProgress-progressColor': '#facc15', 
          }}
        >
          <Typography level="h4">{value} / 100</Typography>
        </CircularProgress>
      </Stack>

     
      <button className="mt-4 bg-yellow-400 text-black py-2 px-6 rounded-lg text-lg font-medium hover:bg-yellow-500 transition">
        View More
      </button>
    </div>
  );
}
