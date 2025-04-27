import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Define the shape of a food item
export interface FoodItem {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

// Props for the Mealcard component
export interface MealcardProps {
  breakfastRows: FoodItem[];
  lunchRows: FoodItem[];
  dinnerRows: FoodItem[];
}

export default function Mealcard({ breakfastRows, lunchRows, dinnerRows }: MealcardProps) {
  const [selectedMeal, setSelectedMeal] = React.useState<'breakfast' | 'lunch' | 'dinner'>('breakfast');

  const renderTable = (rows: FoodItem[]) => (
    <TableContainer component={Paper} style={{ backgroundColor: 'transparent' }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const mealDataMap = {
    breakfast: {
      title: 'Breakfast',
      rows: breakfastRows,
    },
    lunch: {
      title: 'Lunch',
      rows: lunchRows,
    },
    dinner: {
      title: 'Dinner',
      rows: dinnerRows,
    },
  };

  return (
    <div className="mt-6">
      <div className="m-2">
        <h1 className="text-xl font-semibold mb-6">Today's Nutritional Overview</h1>
        <div className="flex space-x-4">
          {(['breakfast', 'lunch', 'dinner'] as const).map((meal) => (
            <button
              key={meal}
              onClick={() => setSelectedMeal(meal)}
              className={`${selectedMeal === meal ? 'bg-yellow-400 text-black' : 'text-gray-600'} px-4 py-2 rounded-lg transition-colors hover:bg-yellow-300`}
            >
              {meal.charAt(0).toUpperCase() + meal.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 bg-transparent p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">{mealDataMap[selectedMeal].title}</h2>
        {renderTable(mealDataMap[selectedMeal].rows)}
      </div>
    </div>
  );
}
