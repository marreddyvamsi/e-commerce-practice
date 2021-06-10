import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function Product({ id, name, image, price }) {
  return (
    <Wrapper>
      <div className="products-img">
        <img src={image} alt="images" />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <div className="products-txt">
        <p className="name">{name}</p>
        <p>{formatPrice(price)}</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  
  .name {
    text-transform: capitalize;
  }
  img {
    height: 225px;
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    &:hover {
      background-color: rgb(181, 172, 158);
      transition: all 0.2s linear;
    }
  }
  .products-txt {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .products-img {
    position: relative;
    background-color: black;
    border-radius: 5px;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
  }
  .products-img:hover .link {
    opacity: 1;
  }
  .products-img:hover img {
    opacity: 0.5;
  }
  svg {
    font-size: 2.5rem;
  }
`;
export default Product;
