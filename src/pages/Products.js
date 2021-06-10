import React, { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Product from "../components/Product";
import Filters from "../components/Filters";
import List from "../components/List";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

function Products() {
  const {
    filteredProducts: products,
    grid,
    sort,
    filters,
  } = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    normal();
  }, []);
  useEffect(() => {
    console.log("This is testing1");
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [sort, filters]);
  function normal() {}
  function formChange(e) {
    let value = e.target.value;
    console.log(value);
    dispatch({ type: "UPDATE_SORT", payload: value });
  }
  return (
    <Wrapper>
      <div>
        <Header title="Products" />
        <div className="sec-center">
          <Filters />
          <div className="display-img">
            <div className="min-filter">
              <div className="btn-svg">
                <button
                  className={`${grid ? "btn  active " : "btn"}`}
                  onClick={() => {
                    dispatch({ type: "SET_GRID" });
                  }}
                >
                  <BsFillGridFill />
                </button>
                <button
                  className={`${!grid ? "btn active " : "btn"}`}
                  onClick={() => {
                    dispatch({ type: "SET_LIST" });
                  }}
                >
                  <BsList />
                </button>
              </div>
              <p>{products.length} products found</p>
              <hr />
              <form action="">
                <label htmlFor="EI">Sort By:</label>
                <select name="" id="EI" onChange={formChange}>
                  <option value="lowest">Price(LOWEST)</option>
                  <option value="highest">Price(HIGHEST)</option>
                  <option value="a-z">Name(A-Z)</option>
                  <option value="z-a">Name(Z-A)</option>
                </select>
              </form>
            </div>
            {grid ? (
              <div className="min-img">
                {products.map((product) => {
                  return <Product key={product.id} {...product} />;
                })}
              </div>
            ) : (
              <List products={products} />
            )}
            {/* {list && <List products={products} />} */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .btn-svg {
    width: 80px;
    display: flex;
    justify-content: space-between;
  }
  .active {
    background: black;
    color: white;
  }
  .btn {
    /* background: transparent; */
    border: none;
    border-radius: 5px;
    width: 1.5rem;
    height: 1.5rem;
  }
  img {
    height: 175px;
    display: block;
  }
  .sec-center {
    width: 90vw;
    min-height: calc(100vh - 20vh);
    margin: 0 auto;
    margin-top: 5rem;
    /* background-color: rgb(250, 235, 215); */
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-gap: 1rem;
  }

  .display-img {
    display: grid;
    grid-template-rows: 2.5rem 1fr;

    .min-filter {
      display: grid;
      grid-template-columns: auto auto 1fr auto;
      column-gap: 2rem;
      align-items: center;
      p {
        margin: 0px;
      }
      svg {
        border: 1px solid black;
        font-size: 1.5rem;
        display: inline-block;
        border-radius: 5px;
      }
    }
    .min-img {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem 1.5rem;
    }
  }
`;

export default Products;
