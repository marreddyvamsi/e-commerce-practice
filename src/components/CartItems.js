import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AmmountButtons from "../components/AmmountButtons";

function CartItems({ product }) {
  function addCart(id, color, amount, product) {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  }
  const dispatch = useDispatch();
  const { colors, stock, id } = product;
  const [amount, setAmount] = useState(1);
  const [mainColor, setMainColor] = useState(colors[0]);
  function increase() {
    setAmount((state) => {
      let tempAmount = state + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  }
  function decrease() {
    setAmount((state) => {
      let tempAmount = state - 1;
      if (tempAmount <= 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  }

  return (
    <Wrapper>
      <div>
        <div className="color">
          <span>Colors:</span>
          <div className="col-btn">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  style={{ background: color }}
                  className={`${
                    mainColor === color ? "color-btn active" : "color-btn"
                  }`}
                  onClick={() => {
                    setMainColor(colors[index]);
                  }}
                >
                  {mainColor === color ? <FaCheck /> : null}
                </button>
              );
            })}
          </div>
        </div>
        <AmmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <div>
          <Link
            to="/cart"
            onClick={() => {
              console.log(id, mainColor);
              addCart(id, mainColor, amount, product);
            }}
          >
            ADD TO CART
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  span {
    font-weight: 700;
  }
  svg {
    color: white;
  }
  a {
    padding: 0.5rem;
    color: white;
    background: black;
    border-radius: 5px;
    font-size: 0.8rem;
    display: inline-block;
    margin-top: 1rem;
  }
  .color {
    display: grid;
    grid-template-columns: 100px 100px;
    margin-top: 1rem;
  }
  .col-btn {
    display: flex;
    justify-content: space-evenly;
  }
  .color-btn {
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 50%;
    display: inline-block;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .color-btn {
    opacity: 0.9;
  }
  .active {
    opacity: 1;
  }
`;
export default CartItems;
