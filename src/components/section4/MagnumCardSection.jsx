import React, { useState } from "react";

const iceCreams = [
  {
    id: 1,
    name: "Magnum Ruby",
    img: "/images/img2.jpg",
    video: "/videos/v1.mp4",
  },
  {
    id: 2,
    name: "Magnum Classic",
    img: "/images/img22.jpg",
    video: "/videos/v2.mp4",
  },
  {
    id: 3,
    name: "Magnum White",
    img: "/images/img4.jpg",
    video:"/videos/v3.mp4",
  },
 
  {
    id: 5,
    name: "Magnum Brownie",
    img: "/images/banner4.jpg",
    video: "/videos/v5.mp4",
  },
  {
    id: 6,
    name: "Magnum Chocolate Truffle",
    img: "/images/img6.jpg",
    video: "/videos/v6.mp4",
  },
  {
    id: 7,
    name: "Magnum Pistachio",
    img: "/images/img7.jpg",
    video: "/videos/v7.mp4",
  },
  {
    id: 8,
    name: "Magnum Mango",
    img: "/images/img10.jpg",
    video: "/videos/v8.mp4",
  },
  {
    id: 9,
    name: "Magnum Almonds",
    img: "/images/img9.jpg",
    video: "/videos/v9.mp4",
  },
 
];

const MagnumCardSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-12 bg-[#fff9f4]">
      <h2 className="text-4xl font-bold text-center text-[#3e1f0f] mb-10">
        Discover Our Flavors 🍨
      </h2>
        
       <div className="grid grid-cols-4 gap-8 px-16 max-w-7xl mx-auto">
        {iceCreams.map((ice) => (
          <div
            key={ice.id}
            className="relative rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onMouseEnter={() => setHovered(ice.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            <img
              src={ice.img}
              alt={ice.name}
              className={`w-full h-70 ject-cover transition-opacity duration-500 ${
                hovered === ice.id ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Video */}
            {hovered === ice.id && (
              <video
                src={ice.video}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-70 object-cover rounded-2xl"
              />
            )}

            {/* Name */}
            <div className="p-3 text-center bg-[#fdf4ec]">
              <h3 className="text-lg font-semibold text-[#5a3b1c]">
                {ice.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MagnumCardSection;


  