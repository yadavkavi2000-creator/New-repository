import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const PopularSection = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      delay: 200,
      reset: false,
    };

    ScrollReveal().reveal(".popular__card", {
      ...scrollRevealOption,
      interval: 300,
    });
  }, []);

  // 🧊 Array of objects — easy to edit or add more cards
  const popularItems = [
    {
      id: 1,
      img: "/images/popular-1.png",
      title: "Magnam Double Caramle Ice Cream Bars ",
      price: "$5.49",
      bgColor: "#fde6f2",
    },
    {
      id: 2,
      img: "/images/popular-2.png",
      title: "Magnam cookie Duet Ice Cream Bars",
      price: "$5.99",
      bgColor: "#eedfd9",
    },
    {
      id: 3,
      img: "/images/popular-3.png",
      title: "Magnam Double Raspberry Ice Cream",
      price: "$4.99",
      bgColor: "#faeaed",
    },
      
  ];

  return (
    <section className="section__container popular__container" id="menu">
      {/* <h2 className="section__header">Popular Ice-Cream</h2> */}

      {/* Grid of 3 cards */}
      <div className="popular__grid">
        {popularItems.map((item) => (
          <div
            className="popular__card"
            key={item.id}
            style={{ "--card-bg": item.bgColor }}
          >
            <img src={item.img} alt={item.title} />
            <div className="popular__card__content">
              <h4>{item.title}</h4>
              <h3>{item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSection;
