import React, { useState } from "react";
import "./App.css";
import { Admin, MainPage, Cart, Header } from "./components";
import { Route, Switch } from "react-router-dom";
import { CartType } from "./data/shared";
import { productsList } from "./data/productsList";

function App() {
  const [authToken, setToken] = useState(getToken());

  const { count, cartData } = getCart();
  const [cart, setCart] = useState(cartData);
  const [cartCount, setCartCount] = useState(count);

  function getToken() {
    const tokenExpr = document.cookie.match(/token=[a-zA-Z0-9]+;?/);
    if (!tokenExpr) return "";
    return tokenExpr[0].slice(6);
  }

  function getCart(): {
    count: number;
    cartData: CartType;
  } {
    const data = document.cookie.match(/cart=[{"0-9:, ]*}/);
    if (!data)
      return {
        count: 0,
        cartData: {},
      };
    const parsedData = JSON.parse(data[0].slice(5)) as CartType;
    return {
      count: Object.values(parsedData).reduce((prev, curr) => prev + curr, 0),
      cartData: parsedData,
    };
  }

  return (
    <div className="App">
      <Header authToken={authToken} setToken={setToken} cartCount={cartCount} />

      <div className="content">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
                cart={cart}
                setCart={setCart}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            )}
          />
          <Route
            exact
            path="/admin"
            render={() => <Admin token={authToken} setToken={setToken} />}
          />
          <Route
            exact
            path="/cart"
            render={() => (
              <Cart
                cart={cart}
                products={productsList}
                setCart={setCart}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
