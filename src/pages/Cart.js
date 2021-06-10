import React, { useEffect } from "react";
import { formatPrice } from "../utils/helpers";
import AmmountButtons from "../components/AmmountButtons";
import Header from "../components/Header";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, ship_fee, total_Amount } = useSelector(
    (state) => state.cartReducer
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch({ type: "GET_TOTALS" });
  }, [cartItems]);
  function increase(id, val) {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, val } });
  }
  function decrease(id, val) {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, val } });
  }
  function deleteCart(id) {
    console.log(id);
    dispatch({ type: "DELETE_CART", payload: { id } });
  }
  return (
    <Wrapper>
      <Header title="cart" />
      {cartItems.length > 0 ? (
        <div className="section">
          <div className="options">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>SubTotal</p>
            <span></span>
          </div>
          <hr />
          {cartItems.map((item) => {
            const { id, image, name, color, price, amount } = item;
            return (
              <div className="frid" key={id}>
                <div className="details">
                  <img src={image} alt="" />
                  <div>
                    <p>{name}</p>
                    <p className="col">
                      <p>Color:</p>
                      <p
                        className="c"
                        style={{ marginLeft: "10px", background: `${color}` }}
                      ></p>
                    </p>
                  </div>
                </div>
                <p>{formatPrice(price)}</p>
                <AmmountButtons
                  increase={increase.bind(this, id, "inc")}
                  decrease={decrease.bind(this, id, "dec")}
                  amount={item.amount}
                />
                <p>{formatPrice(price * amount)}</p>
                <span>
                  <button onClick={deleteCart.bind(this, id)}>
                    <MdDelete />
                  </button>
                </span>
              </div>
            );
          })}
          <br />
          <hr />
          <div className="final">
            <p>Sub Total: {formatPrice(total_Amount)}</p>
            <p>Shipping Fee: {formatPrice(ship_fee)}</p>
            <h4>Order Total: {formatPrice(total_Amount + ship_fee)}</h4>
          </div>
        </div>
      ) : (
        <div className="fill">
          <h3>your cart is empty</h3>
          <Link to="/products">FILL IT</Link>
        </div>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .final {
    margin: 2rem 0;
    margin-left: 714px;
    width: 500px;
    height: 200px;
    border: 1px solid black;
    & > * {
      text-align: left;
      margin-top: 1rem;
    }
  }
  .c {
    width: 10px;
    height: 10px;
    border-radius: 2px;
  }
  .col {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-align: start;
    }
  }
  div > p {
    text-transform: capitalize;
    font-weight: 700;
  }
  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    div * {
      margin: 0;
    }
  }
  img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
  .fill {
    height: 50vh;
    width: 100%;
    h3 {
      margin-top: 4rem;
    }
    a {
      padding: 0.5rem;
      color: white;
      background: black;
      border-radius: 5px;
      letter-spacing: 0.2rem;
    }
  }
  .frid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    place-items: center;
  }
  .section {
    width: 90%;
    margin: 0 auto;
  }
  .options {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    place-items: center;
  }
  span {
    width: 2rem;
    height: 2rem;
    button {
      border: none;
      cursor: pointer;
    }
    svg {
      font-size: 1.5rem;
      color: white;
      background: rgb(187, 37, 37);
      border-radius: 3px;
    }
  }
`;
export default Cart;
