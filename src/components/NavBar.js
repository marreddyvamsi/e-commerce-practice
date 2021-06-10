import React from "react";
import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { links } from "../utils/constants";
import styled from "styled-components";
import { useSelector } from "react-redux";

function NavBar() {
  const { total_cartItems } = useSelector((state) => state.cartReducer);
  return (
    <Nav>
      <div className="nav-bg">
        <div className="nav center">
          <div className="svg">
            <Link to="/">
              <img src={logo} alt="comfy sloth" />
            </Link>
          </div>
          <div className="links">
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <NavLink exact to={link.url}>{link.text}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cart-container">
            <NavLink exact to="./cart">Cart</NavLink>
            <span>{total_cartItems}</span>
          </div>
        </div>
      </div>
    </Nav>
  );
}
const Nav = styled.div`
  span {
    position: absolute;
    left: 57%;
    top: -5px;
    background: hsl(22, 31%, 52%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    border-bottom: 1px solid black;
  }
  img {
    width: 175px;
    margin-left: -15px;
  }
  svg {
    font-size: 2rem;
  }
  .cart-container {
    position: relative;
    flex: 0 1 250px;
    a {
      font-size: 1.5rem;
    }
  }
  .links {
    a {
      color: black;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 0.5rem;
      &:hover {
        border-bottom: 2px solid black;
      }
    }
  }
`;
export default NavBar;
