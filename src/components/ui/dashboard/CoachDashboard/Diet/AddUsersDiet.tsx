"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

type Adherent = {
  id_adherent: number;
  nom: string;
  prenom: string;
};

type Food = {
  id_food: number;
  name: string;
};

export default function AddUsersDiet() {
  const [adherents, setAdherents] = useState<Adherent[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [selectedFoods, setSelectedFoods] = useState<Food[]>([]);
  const [mealType, setMealType] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data: users, error: userError } = await supabase
        .from("Adherent")
        .select("id_adherent, nom, prenom");

      const { data: foodData, error: foodError } = await supabase
        .from("food")
        .select("id_food, name");

      if (userError || foodError) {
        console.error("Error fetching data:", userError || foodError);
        return;
      }

      setAdherents(users || []);
      setFoods(foodData || []);
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (!selectedUser || !mealType || !selectedDate) {
      setStatus("Please select a user, meal type, and date.");
      return;
    }

    // Loop through each selected food and insert it individually
    for (const food of selectedFoods) {
      const { data, error } = await supabase
        .from("Diet")
        .insert({
          id_adherent: selectedUser,
          id_food: food.id_food,
          meal_type: mealType,
          Date: selectedDate, // Pass the selected date
        });

      if (error) {
        console.error("Insert error:", error.message);
        setStatus("Failed to add diet.");
        return;
      } else {
        console.log("Data inserted:", data); // Log inserted data
      }
    }

    setStatus("Diet added successfully.");
    setMealType("");
    setSelectedFoods([]);
    setSelectedDate("");
  };

  const handleFoodSelect = (food: Food) => {
    if (selectedFoods.some((f) => f.id_food === food.id_food)) {
      setSelectedFoods(selectedFoods.filter((f) => f.id_food !== food.id_food));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  return (
    <>
      <div
        className="relative text-white rounded-2xl p-6 shadow-2xl w-80 h-48 overflow-hidden bg-cover bg-center cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        style={{
          backgroundColor: "#000000",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="text-4xl font-bold italic">Add Diet Entry</div>
          </div>
        </div>
      </div>

      {/* Full-Screen Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-start p-6 overflow-y-auto">
          <div className="w-full max-w-3xl text-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">Add Diet Entry</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white text-xl"
              >
                ✕
              </button>
            </div>

            {/* Select User */}
            <label className="block mb-2">Select User:</label>
            <select
              className="w-full p-2 mb-4 border rounded text-black"
              value={selectedUser ?? ""}
              onChange={(e) => setSelectedUser(Number(e.target.value))}
            >
              <option value="">-- Choose a user --</option>
              {adherents.map((user) => (
                <option key={user.id_adherent} value={user.id_adherent}>
                  {user.nom} {user.prenom}
                </option>
              ))}
            </select>

            {/* Meal Type (Breakfast, Lunch, Dinner) */}
            <label className="block mb-2">Meal Type:</label>
            <select
              className="w-full p-2 mb-4 border rounded text-black"
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
            >
              <option value="">-- Choose a meal type --</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>

            {/* Select Date */}
            <label className="block mb-2">Select Date:</label>
            <input
              type="date"
              className="w-full p-2 mb-4 border rounded text-black"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />

            {/* Select Foods (in a 5-per-column grid) */}
            <label className="block mb-2">Select Foods:</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
              {foods.map((food) => (
                <div
                  key={food.id_food}
                  className={`flex items-center space-x-2 cursor-pointer p-2 rounded-lg border ${
                    selectedFoods.some((f) => f.id_food === food.id_food)
                      ? "bg-blue-600 text-white"
                      : "bg-white text-black"
                  } hover:bg-blue-600 hover:text-white transition`}
                  onClick={() => handleFoodSelect(food)}
                >
                  <input
                    type="checkbox"
                    checked={selectedFoods.some((f) => f.id_food === food.id_food)}
                    onChange={() => handleFoodSelect(food)} // Prevent checkbox default behavior
                    className="rounded"
                  />
                  <span>{food.name}</span>
                </div>
              ))}
            </div>

            {/* Display selected foods */}
            {selectedFoods.length > 0 && (
              <div className="space-y-2 mb-4">
                <p className="font-semibold">Selected Foods:</p>
                <ul className="space-y-2">
                  {selectedFoods.map((food) => (
                    <li
                      key={food.id_food}
                      className="bg-white text-black p-2 rounded-lg flex justify-between items-center"
                    >
                      <span>{food.name}</span>
                      <button
                        className="text-red-600 text-sm"
                        onClick={() =>
                          setSelectedFoods(selectedFoods.filter((f) => f.id_food !== food.id_food))
                        }
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Add Diet
            </button>

            {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
          </div>
        </div>
      )}
    </>
  );
}
