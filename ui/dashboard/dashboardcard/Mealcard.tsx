import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const breakfastRows = [
  createData('Oatmeal', 150, 3.0, 27, 5.0),
  createData('Eggs', 155, 11.0, 1, 13.0),
  createData('Coffee', 2, 0, 0, 0),
];

const lunchRows = [
  createData('Chicken Salad', 350, 15.0, 10, 30.0),
  createData('Rice', 200, 0.5, 44, 4.0),
  createData('Juice', 150, 0.2, 35, 1.0),
];

const dinnerRows = [
  createData('Steak', 450, 25.0, 0, 50.0),
  createData('Vegetables', 120, 7.0, 18, 4.0),
  createData('Water', 0, 0, 0, 0),
];

export default function Mealcard() {
  const [selectedMeal, setSelectedMeal] = React.useState('breakfast');

  return (
    <div className="mt-6">
      <div className="m-2">
        <h1 className="text-xl font-semibold">Today's Nutritional Overview</h1>

        {/* Meal Tab Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedMeal('breakfast')}
            className={`${
              selectedMeal === 'breakfast' ? 'bg-yellow-400 text-black' : 'text-gray-600'
            } px-4 py-2 rounded-lg transition-colors hover:bg-yellow-300`}
          >
            Breakfast
          </button>
          <button
            onClick={() => setSelectedMeal('lunch')}
            className={`${
              selectedMeal === 'lunch' ? 'bg-yellow-400 text-black' : 'text-gray-600'
            } px-4 py-2 rounded-lg transition-colors hover:bg-yellow-300`}
          >
            Lunch
          </button>
          <button
            onClick={() => setSelectedMeal('dinner')}
            className={`${
              selectedMeal === 'dinner' ? 'bg-yellow-400 text-black' : 'text-gray-600'
            } px-4 py-2 rounded-lg transition-colors hover:bg-yellow-300`}
          >
            Dinner
          </button>
        </div>
      </div>

      {/* Conditional Rendering for Mealcard */}
      <div className="mt-4">
        {selectedMeal === 'breakfast' && (
          <div className="bg-transparent p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Oatmeal, Eggs, and Coffee</h2>
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
                  {breakfastRows.map((row) => (
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
          </div>
        )}
        {selectedMeal === 'lunch' && (
          <div className="bg-transparent p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Chicken Salad, Rice, and Juice</h2>
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
                  {lunchRows.map((row) => (
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
          </div>
        )}
        {selectedMeal === 'dinner' && (
          <div className="bg-transparent p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Steak, Vegetables, and Water</h2>
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
                  {dinnerRows.map((row) => (
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
          </div>
        )}
      </div>
    </div>
  );
}
