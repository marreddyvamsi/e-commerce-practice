import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import ProductImages from "../components/ProductImages";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Stars from "../components/Stars";
import CartItems from "../components/CartItems";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { singleProductLoading: loading, singleProduct } = useSelector(
    (state) => state.productsReducer
  );

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch({ type: "SINGLE_FETCH_BEGIN" });
    dispatch({ type: "SINGLE_FETCH", payload: id });
  }, [id]);

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = singleProduct;
  if (loading) {
    return <Loading />;
  }
  // if (error) {
  //   return <Error />;
  // }

  return (
    <Wrapper>
      <Header title={name} product />
      <div className="sec-center">
        <Link to="/products" className="link">
          BACK TO PRODUCTS
        </Link>
        <div className="section">
          <ProductImages images={images} />
          <div className="single-desc">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5>{formatPrice(price)}</h5>
            <p className="dis">{description}</p>
            <p className="gri">
              <span>Available</span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="gri">
              <span>SKU:</span>
              {sku}
            </p>
            <p className="gri">
              <span>Brand</span>
              {company}
            </p>
            <hr />
            {stock > 0 ? (
              <CartItems product={singleProduct} />
            ) : (
              <h3>Item is Out of Stock</h3>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .sec-center {
    width: 90vw;
    margin: 0 auto;
  }
  .dis {
    line-height: 1.5;
  }
  .section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    margin: 2rem 0;
  }
  .link {
    display: inline-block;
    padding: 0.5rem;
    background-color: black;
    color: white;
    border-radius: 5px;
    margin: 4rem 0;
  }
  .single-desc {
    text-align: start;
    .gri {
      display: grid;
      grid-template-columns: 125px 1fr;
      margin: 2rem 0;
      span {
        font-weight: 700;
      }
    }
  }
`;

export default SingleProduct;
