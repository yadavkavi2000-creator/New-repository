import React from "react";

const DiscoverSection = () => {
  return (
    <section className="section__container discover__container" id="categories">
      <h2 className="section__header">Most Selling Ice-Cream</h2>
      <p className="section__description">
        Discover our crowd favorites! These ice creams are loved by everyone and
        have become the top picks for their irresistible flavors and creamy
        textures.
      </p>

      <div className="discover__grid">
        <div className="discover__card">
          <img src="/assets/discover-1.jpg" alt="discover" />
          <div className="discover__card__content">
            <h4>Double Chocolate Crunch</h4>
            <p className="section__description">
              Dive into a chocolate lover's paradise with our Double Chocolate
              Crunch. This rich and creamy ice cream is made with premium cocoa
              and blended with crunchy chocolate chunks to deliver a perfect
              balance of smoothness and texture.
            </p>
            <h3>
              $6.99 <span><s>$9.99</s></span>
            </h3>
            <div className="discover__card__btn">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
  