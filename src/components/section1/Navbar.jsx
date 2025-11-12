import React from 'react'


const Navbar = () => {
    
  return (  
    <nav className=" fixed top-0 left-0 w-full z-50 bg-[#2b1810] text-[#f3d9b1] px-10 py-5 flex justify-between items-center shadow-md">
      {/* Left: Logo + Text */}
      <div className="flex items-center space-x-3 cursor-pointer">
        {/* SVG Logo */}
        <img 
          src="/imageandlogo/Magnum_logo.svg.png" 
          alt="Magnum Logo" 
          className="h-10 w-auto invert-[0.2] sepia-[0.8] saturate-[4] hue-rotate-[10deg] "

        />
        {/* Text next to logo */}
        <span className="text-2xl font-serif tracking-widest text-[#d7b06a]">
          {/* MAGNUM */}
        </span>
      </div>
      {/* Right: Links */}
      <ul className="flex space-x-8 text-lg font-light">
        {["Products", "Stories", "Company", "Contact"].map((item) => (
          <li key={item} className="relative group cursor-pointer">
            {item}
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#a58851] group-hover:w-full transition-all duration-300"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
