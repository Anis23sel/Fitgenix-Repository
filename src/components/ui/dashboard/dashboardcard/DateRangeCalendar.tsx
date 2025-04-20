'use client';
import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

export default function DateRangeCalendarCalendarsProp() {
  return (
    <div className="border-2 border-black rounded-lg shadow-lg p-4">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
          <DemoItem>
            <DateRangeCalendar calendars={1} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
