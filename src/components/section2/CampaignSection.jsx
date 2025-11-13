import React, { useState } from "react";

const CampaignSection = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 400); // 0.4s ke baad shadow hata do
  };

  return (
    <section className="bg-[#f3d9b1] text-[#2b1810] py-20 flex flex-col items-center justify-center">
      {/* Button */}
      <button
        onClick={handleClick}
        className={`relative px-8 py-3 text-lg font-serif tracking-wider border border-[#2b1810] text-[#2b1810] overflow-hidden group ${
          clicked ? "shadow-[0_0_40px_10px_#b48a3a]" : "shadow-none"
        }`}
      >
        <span className="absolute inset-0 bg-[#2b1810] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
        <span className="relative group-hover:text-[#f3d9b1] transition-colors duration-500">
          View the Full Campaign
        </span>
      </button>

      {/* Product Text with animation */}
      <h2 className="mt-12 text-4xl font-serif tracking-[0.2em] animate-fadeIn text-[#2b1810]">
        Discover Our Products
      </h2>
    </section>
  );
};

export default CampaignSection;
