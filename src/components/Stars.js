import React from "react";
import styled from "styled-components";
import { BsStarHalf, BsFillStarFill, BsStar } from "react-icons/bs";

function Stars({ stars, reviews }) {
  return (
    <Wrapper>
      <div className="p">
        <div>
          {Array.from({ length: 5 }, (_, index) => {
            return (
              <span key={index}>
                {stars >= index + 1 ? (
                  <BsFillStarFill />
                ) : stars >= index + 0.5 ? (
                  <BsStarHalf />
                ) : (
                  <BsStar />
                )}
              </span>
            );
          })}
        </div>
        <p className="rev">{`(${reviews} customers reviews)`}</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  p {
    margin: 0;
  }
  .p {
    display: grid;
    grid-template-columns: 100px auto;
  }

  svg {
    color: gold;
  }
`;
export default Stars;
