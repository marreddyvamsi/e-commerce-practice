import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper className="section-center">
      <div className="center">
        <div className="contact-text">
          <h3>Join our newsletter and get 20% off</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veniam repudiandae vel ab id, fuga praesentium nobis natus ipsam
            vero?
          </p>
        </div>
        <div className="contact-form">
          <form action="">
            <input
              type="email"
              placeholder="enter email"
              className="form-input"
            />
            <button className="submit-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  height: 200px;
  padding: 15rem 0;
  .center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    contact-text {
      text-align: left;
    }
    form {
      display: grid;
      grid-template-columns: 1fr auto;
    }
    .form-input,
    .submit-btn {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border: 2px solid black;
    }
    .form-input {
      border-right: none;
      color: grey;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .submit-btn {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .form-input::placeholder {
      color: black;
      text-transform: capitalize;
    }
    .submit-btn {
      background: rgb(197, 164, 145);
      text-transform: capitalize;
      letter-spacing: 1, 8;
      cursor: pointer;
      /* transition: var(--transition); */
      color: black;
    }
    .submit-btn:hover {
      color: white;
    }
  }
`;
export default Contact;
