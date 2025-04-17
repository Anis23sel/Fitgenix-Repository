"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";

export default function SignupStep() {
  const router = useRouter();
  const { step } = useParams();  
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    nom: searchParams.get("nom") || "",
    prenom: searchParams.get("prenom") || "",
    email: searchParams.get("email") || "",
    password: searchParams.get("password") || "",
    age: searchParams.get("age") || "",
    gender: searchParams.get("gender") || "",
    goal: searchParams.get("goal") || "",
    nombre_sceance_restantes: searchParams.get("nombre_sceance_restantes") || "",
    nombre_heures_restantes: searchParams.get("nombre_heures_restantes") || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNavigation = (nextStep: number) => {
    const queryString = new URLSearchParams(formData).toString();
    router.push(`/signup/${nextStep}?${queryString}`);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/auth/signup', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("API response:", data);

      if (response.ok) {
        alert('Form submitted successfully!');
        router.push('/thank-you');
      } else {
        alert(`Failed to submit the form: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/pictures/Landingpage/Page1/Landing_page.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto p-8 border rounded-lg shadow bg-black border-yellow-400 w-full h-4/5 text-white">
        {step === "1" && (
          <>
            <div className="font-black text-black">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">Step 1: Personal Data</h2>
              <input type="text" name="nom" placeholder="Nom" className="input mb-4 p-2 w-full rounded" onChange={handleChange} value={formData.nom} />
              <input type="text" name="prenom" placeholder="Prenom" className="input mb-4 p-2 w-full rounded" onChange={handleChange} value={formData.prenom} />
              <input type="email" name="email" placeholder="Email" className="input mb-4 p-2 w-full rounded" onChange={handleChange} value={formData.email} />
              <input type="password" name="password" placeholder="Mot de Passe" className="input mb-4 p-2 w-full rounded" onChange={handleChange} value={formData.password} />
              <input type="number" name="age" placeholder="Age" className="input mb-4 p-2 w-full rounded" onChange={handleChange} value={formData.age} />
              <select name="gender" className="input mb-4 p-2 w-full rounded" onChange={handleChange} value={formData.gender}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className="flex justify-between">
                <button onClick={() => handleNavigation(2)} className="btn bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition">Next</button>
              </div>
            </div>
          </>
        )}

        {step === "2" && (
          <>
            <div className="font-black text-white">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">Step 2: Sports & Goals</h2>
              <input type="text" name="goal" placeholder="Goal" className="input mb-4 p-2 w-full rounded" onChange={handleChange} value={formData.goal} />
              <input type="number" name="nombre_sceance_restantes" placeholder="Nombre de Sceance Restantes" className="input mb-4 p-2 w-full rounded" onChange={handleChange} value={formData.nombre_sceance_restantes} />
              <input type="number" name="nombre_heures_restantes" placeholder="Nombre d'Heures Restantes" className="input mb-4 p-2 w-full rounded" onChange={handleChange} value={formData.nombre_heures_restantes} />
              <div className="flex justify-between">
                <button onClick={() => handleNavigation(1)} className="btn bg-gray-400 text-black font-semibold py-2 px-4 rounded hover:bg-gray-500 transition">Back</button>
                <button onClick={() => handleNavigation(3)} className="btn bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition">Next</button>
              </div>
            </div>
          </>
        )}

        {step === "3" && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">Step 3: Review & Submit</h2>
            <p className="mb-2"><strong className="text-yellow-400">Nom:</strong> <span className="text-white">{formData.nom}</span></p>
            <p className="mb-2"><strong className="text-yellow-400">Prenom:</strong> <span className="text-white">{formData.prenom}</span></p>
            <p className="mb-2"><strong className="text-yellow-400">Email:</strong> <span className="text-white">{formData.email}</span></p>
            <p className="mb-2"><strong className="text-yellow-400">Mot de Passe:</strong> <span className="text-white">{formData.password}</span></p>
            <p className="mb-2"><strong className="text-yellow-400">Age:</strong> <span className="text-white">{formData.age}</span></p>
            <p className="mb-2"><strong className="text-yellow-400">Gender:</strong> <span className="text-white">{formData.gender}</span></p>
            <p className="mb-2"><strong className="text-yellow-400">Goal:</strong> <span className="text-white">{formData.goal}</span></p>
            <p className="mb-2"><strong className="text-yellow-400">Nombre de Sceance Restantes:</strong> <span className="text-white">{formData.nombre_sceance_restantes}</span></p>
            <p className="mb-2"><strong className="text-yellow-400">Nombre d'Heures Restantes:</strong> <span className="text-white">{formData.nombre_heures_restantes}</span></p>
            <div className="flex justify-between">
              <button onClick={() => handleNavigation(2)} className="btn bg-gray-400 text-black font-semibold py-2 px-4 rounded hover:bg-gray-500 transition">Back</button>
              <button onClick={handleSubmit} className="btn bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition">Submit</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
