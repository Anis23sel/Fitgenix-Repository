"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import OfferSection from "../../components/OfferSection";
import { useState } from "react";


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sports = [
    {  background: "/pictures/Sports/Football.png" },
    {  background: "/pictures/Sports/Handball.png" },
    {  background: "/pictures/Sports/Natation.png" },
    {  background: "/pictures/Sports/Basketball.png" },
    {  background: "/pictures/Sports/Tennis.png" },
    {  background: "/pictures/Sports/Arts_martiaux.png" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sports.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sports.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div 
        className="h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pictures/LandingPage/page1/Landing_page.png')" }}
      >
        <div className="absolute top-0 left-0 w-full mt-4 ml-9 text-3xl font-bold text-white shadow-lg">
          <Header/>
        </div>
        <div className="w-full h-full flex flex-col items-start p-8 font-sans mt-9">
          <h1 className="text-8xl font-bold text-white shadow-lg">
            BE YOUR <span className="text-yellow-400 italic">BEST</span>
            <br />
            WITH <span className="text-yellow-400 italic">FITGENIX</span>
          </h1>
        </div>
        <Link href="/signup">
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-lg hover:bg-white transition">
            JOIN US
          </button>
        </Link>
      </div>

      <div 
        className="h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pictures/LandingPage/2ndPage/2ndPage.png')" }}
      >
        <div className="w-full h-full flex justify-center items-center px-16">
          <div className="flex justify-between items-center w-full ">
            {/* Left Section (Text) */}
            <div className="w-1/2 text-left">
              <h1 className="text-4xl text-yellow-400 italic font-bold">ABOUT FITGENIX</h1>
              <p className="mt-4 text-lg text-white leading-relaxed">
                A personalized fitness platform powered <br /> by AI offering tailored workout plans <br /> 
                nutrition guidance and progress tracking <br /> to help athletes and fitness enthusiasts <br /> 
                achieve their goals efficiently.
              </p>
            </div>

            <div className="flex justify-end gap-8">
              <div className="mb-11">
                <Image 
                  src="/pictures/Landingpage/2ndPage/Men.png" 
                  alt="Men" 
                  width={700} 
                  height={300} 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-11">
                <Image 
                  src="/pictures/Landingpage/2ndPage/Women.png" 
                  alt="Women" 
                  width={700} 
                  height={300} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col items-center bg-cover bg-center px-8 py-16 bg-black">
        <div className="text-head text-center">
          <h1 className="text-4xl font-bold text-yellow-400 italic">WHAT WE OFFER</h1>
          <p className="mt-2 text-lg">We're committed to bringing you the best workout experience</p>
        </div>

        <div className="flex justify-center items-center w-full h-full gap-6 mt-8 italic">
          <button onClick={handlePrev} className="text-white text-2xl">&#8592;</button>
          {sports.slice(currentIndex, currentIndex + 3).map((sport, index) => (
            <OfferSection key={index} background={sport.background} />
          ))}
          <button onClick={handleNext} className="text-white text-2xl">&#8594;</button>
        </div>
      </div>

      <div 
        className="h-screen flex flex-col bg-cover bg-center relative italic"
        style={{ backgroundImage: "url('/pictures/Landingpage/3rdPage/Background.png')" }}
      >
        <div className="w-full flex justify-center gap-40 items-end absolute bottom-10 text-black">
          <div>
            <h2 className="text-xl font-semibold">Mailing Address</h2>
            <p>Sidi Amar, Annaba</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Email Address</h2>
            <p>xxxxx@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Phone Number</h2>
            <p>(213)xxxxxxx</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
