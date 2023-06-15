import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="hero-container-data">
          <h2>Good food choices are good investments.</h2>
          <p>
            There is a powerful need for symbolism, and that means the
            architecture must have something that appeals to the human heart.
          </p>
          <button className="button">
            <Link to="/categories">
              Explore More
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
