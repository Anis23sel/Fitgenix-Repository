import React, { useState, useEffect } from 'react';

interface DateSelectorProps {
    /**
     * Callback invoked when the selected date changes.
     * Receives the date string in YYYY-MM-DD format.
     */
    onDateChange?: (date: string) => void;
}

/**
 * DateSelector component displays a 5-day range and allows selecting a date.
 * Calls onDateChange callback with the selected date (YYYY-MM-DD).
 */
const DateSelector: React.FC<DateSelectorProps> = ({ onDateChange }) => {
    const [dates, setDates] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    // Generate an array of 5 date strings (ISO format) starting from today
    useEffect(() => {
        const start = new Date();
        const generatedDates = Array.from({ length: 5 }, (_, i) => {
            const date = new Date(start);
            date.setDate(start.getDate() + i);
            return date.toISOString().split('T')[0];
        });
        setDates(generatedDates);

        // Initialize selection to the first date
        setSelectedDate(generatedDates[0]);
        onDateChange?.(generatedDates[0]);
    }, [onDateChange]);

    const handleClick = (date: string) => {
        setSelectedDate(date);
        onDateChange?.(date);
    };

    return (
        <div>
            <ul className="flex justify-between">
                {dates.map((date) => {
                    const dateObject = new Date(date);
                    const formattedDate = dateObject.toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "short",
                    }).toUpperCase(); // Format date as DD MMM

                    return (
                        <li
                            key={date}
                            onClick={() => handleClick(date)}
                            className={
                                `cursor-pointer px-3 py-2 rounded-xl transition ` +
                                (selectedDate === date
                                    ? 'bg-yellow-400 text-black'
                                    : 'bg-gray-100 text-gray-800 hover:bg-yellow-400')
                            }
                        >
                            {formattedDate}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DateSelector;
