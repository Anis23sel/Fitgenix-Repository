"use client";

import React from "react";

export interface FoodItem {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface Props {
  breakfastRows: FoodItem[];
  lunchRows: FoodItem[];
  dinnerRows: FoodItem[];
}

const MealCardSection = ({ title, items }: { title: string; items: FoodItem[] }) => (
  <div className="bg-black backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    {items.length > 0 ? (
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors text-white"
          >
            <span className="font-medium">{item.name}</span>
            <span className="text-sm text-white/80">{item.calories} kcal</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-white/70 text-sm italic">No items added</p>
    )}
  </div>
);

const Mealcard: React.FC<Props> = ({ breakfastRows, lunchRows, dinnerRows }) => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MealCardSection title="🥣 Breakfast" items={breakfastRows} />
        <MealCardSection title="🍱 Lunch" items={lunchRows} />
        <MealCardSection title="🍽️ Dinner" items={dinnerRows} />
      </div>
    </div>
  );
};

export default Mealcard;
