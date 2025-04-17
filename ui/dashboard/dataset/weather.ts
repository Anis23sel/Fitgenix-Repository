export const dataset = [
    { city: 'New York', temperature: 28 },
    { city: 'Los Angeles', temperature: 32 },
    { city: 'Chicago', temperature: 24 },
    { city: 'Houston', temperature: 30 },
    { city: 'Phoenix', temperature: 36 },
  ];
  
  // A value formatter that adds a "°C" suffix
  export const valueFormatter = (value: number) => `${value}°C`;