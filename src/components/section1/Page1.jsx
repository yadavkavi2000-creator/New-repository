
import Navbar from './Navbar'
import React, { useState, useEffect } from "react";


const Page1 = () => {
  const banners = [
    { id: 1, img: "/images/banner1.jpg" },
    { id: 2, img: "/images/banner2.jpg" },
    { id: 3, img: "/images/banner3.jpg" },
    { id: 4, img: "/images/banner4.jpg" },
  ];

  const [index, setIndex] = useState(0);

  // Auto Slide Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000); // slide every 4 sec
    return () => clearInterval(timer);
  }, []);

  return (
    <>
   
    <section className="relative h-screen overflow-hidden mt-16">
      {banners.map((banner, i) => (
        <img
          key={banner.id}
          src={banner.img}
          alt={`Banner ${i + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Optional text overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-[#f3d9b1] text-5xl font-serif tracking-widest">
          Indulge in Pleasure
        </h1>
      </div>
    </section>
    </>
  );
};

export default Page1
