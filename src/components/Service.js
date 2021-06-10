import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

function Service() {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="service">
          <div className="service-text">
            <h2>
              Custom Furniture <br />
              Build Only For You
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eaque ea eos? Rerum eius numquam magni quis iusto harum
              accusantium?
            </p>
          </div>
          <div className="service-card">
            {services.map((service) => {
              return (
                <article key={service.id} className="card">
                  <span className="icon">{service.icon}</span>
                  <h1>{service.title}</h1>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .service {
    background-color: rgb(234, 222, 215);
    display: flex;
    flex-direction: column;
    height: 75vh;
  }
  .service-text {
    display: flex;
    text-align: start;
    h2 {
      margin-left: 1rem;
      flex: 0 0 50%;
      font-size: 2rem;
    }
    p {
      flex: 0 0 50%;
    }
  }
  .service-card {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
  }
  .card {
    padding: 2rem;
    background: rgb(197, 164, 145);
    width: 30%;
    height: 350px;
    border-radius: 0.5rem;
    p{
      line-height: 1.8;
    }
    span {
      margin: 0 auto;
      margin-bottom: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: rgb(234, 222, 215);
      svg {
        font-size: 2rem;
      }
    }
  }
`;

export default Service;
