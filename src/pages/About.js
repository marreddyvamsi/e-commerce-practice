import React from "react";
import styled from "styled-components";
import heroBcg from "../assets/hero-bcg.jpeg";
import Header from "../components/Header";

function About() {
  return (
    <Wrapper className="section-center">
      <Header title="About" />
      <div className="about">
        <div className="img">
          <img src={heroBcg} alt="" />
        </div>
        <div className="text">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam
            debitis odit numquam accusantium facilis eos laboriosam, soluta,
            commodi totam modi dolorem, quisquam minus consectetur consequatur
            atque nihil pariatur ea. Delectus animi est maxime quo, cum hic amet
            omnis id voluptates iusto, aperiam eius mollitia ad deleniti
            corporis voluptas consequuntur?
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  .about {
    height: calc(100vh);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-top: 4rem;
  }
  img {
    display: inline-block;
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 5px;
  }
  p {
    text-align: start;
    line-height: 1.8;
  }
  h1 {
    text-align: start;
    margin-bottom: 2rem;
  }
`;
export default About;
