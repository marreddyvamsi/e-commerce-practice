import React from "react";
import Product from "./Product";
import Loading from "./Loading";
import Error from "./Error";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Feature() {
  const {
    featuredProducts,
    productsLoading: loading,
    error,
  } = useSelector((state) => state.productsReducer);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    return (
      <>
        <Error />
      </>
    );
  }
  return (
    <Wrap>
      <div className="feature section-center">
        <h2>Featured Products</h2>
        <div className="feature-product section-center">
          {featuredProducts.slice(0, 3).map((featured) => {
            return <Product key={featured.id} {...featured} />;
          })}
        </div>
        <Link to="/Products">All Products</Link>
      </div>
    </Wrap>
  );
}
const Wrap = styled.section`
  .feature {
    background-color: rgb(241, 245, 248);
    width: 100%;
    height: 95vh;
  }
  h2 {
    text-align: center;
    padding-top: 3rem;
  }
  a {
    text-transform: capitalize;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    color: white;
    background: black;
    border-radius: 5px;
  }
  .feature-product {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    grid-gap: 4rem;
    margin: 3rem 0;
  }
`;

export default Feature;
