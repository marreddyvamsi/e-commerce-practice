import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <div>
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: black;
  height: 7rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin-top: 3.5rem;
      color: white;
    }
  }
`;

export default Footer;
