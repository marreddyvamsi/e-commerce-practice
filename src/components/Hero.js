import React from "react";
import styled from "styled-components";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Wrap>
      <div className="hero-flex">
        <div className="hero-text">
          <h1>
            Design Your <br />
            ComfortZone
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            libero maxime pariatur earum vero. Modi, totam! Ex quod possimus sit
            similique maxime quasi velit commodi dolor, inventore sapiente, quas
          </p>
          <Link to="/products">Shop Now</Link>
        </div>
        <div className="hero-img">
          <img src={heroBcg} alt="hero" className="first-img" />
          <img src={heroBcg2} alt="" className="last-img" />
        </div>
      </div>
    </Wrap>
  );
}
const Wrap = styled.div`
  .hero-flex {
    height: calc(100vh - 7rem);
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    a {
      color: white;
      padding: 0.5rem 1rem;
      background: black;
      border-radius: 5px;
    }
  }
  .hero-text {
    text-align: left;
    width: 50vw;
    margin-left: 2rem;
    p {
      margin-bottom: 2rem;
      /* letter-spacing: 0.2rem; */
      max-width:550px;
      font-size: 1.5rem;
    }
    h1 {
      margin-bottom: 2rem;
    }
  }
  .hero-img {
    display: block;
    width: 50vw;
    height: 100%;
    position: relative;
    .first-img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .last-img {
      position: absolute;
      width: 250px;
      bottom: 0;
      left: 0;
      transform: translateX(-30%);
      border-radius: 5px;
    }
  }
`;

export default Hero;
