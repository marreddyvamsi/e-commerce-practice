import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header({ title, product }) {
  return (
    <Wrapper>
      <div>
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/products</Link>} / {title}
        </h3>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  div {
    height: 7rem;
    background: rgb(234, 222, 215);
    text-align: start;
  }
  h3 {
    padding-top: 2.5rem;
  }
`;
export default Header;
