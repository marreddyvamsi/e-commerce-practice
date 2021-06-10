import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import styled from "styled-components";

function List({ products }) {
  return (
    <Wrapper>
      <div className="list">
        {products.map((product) => {
          const { id, image, name, price, description } = product;
          return (
            <div key={id} className="list-view">
              <div className="list-img">
                <img src={image} alt="" />
              </div>
              <div className="list-desc">
                <h4>{name}</h4>
                <p>{formatPrice(price)}</p>
                <p>{description.substring(200)}...</p>
                <Link to={`/products/${id}`}>DETAILS</Link>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  .list {
    display: grid;
    row-gap: 3rem;
    margin: 2rem 0;
  }
  .list-view {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
  }
  img {
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  .list-desc {
    text-align: start;
  }
  a {
    font-size: 0.5rem;
    padding: 0.3rem;
    color: white;
    background-color: black;
    border-radius: 3px;
    letter-spacing: 0.1rem;
  }
`;
export default List;
