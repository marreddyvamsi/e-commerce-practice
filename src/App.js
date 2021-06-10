import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Home, About, Products, Error, Cart, SingleProduct } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_BEGIN" });
    dispatch({ type: "FETCH_DATA" });
    dispatch({ type: "GET_TOTALS" });
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id" exact>
            <SingleProduct />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="*" exact>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
