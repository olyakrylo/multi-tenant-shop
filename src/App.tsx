import React, { useEffect, useState } from "react";
import "./App.css";
import { Admin, MainPage, Cart, Header } from "./components";
import { Route, Switch } from "react-router-dom";
import { CartType, ProductWithId } from "./data/shared";
import { loadProducts } from "./middleware";

function App() {
  const [authToken, setToken] = useState(getToken());

  const { count, cartData } = getCart();
  const [cartList, setCartList] = useState(cartData);
  const [cartCount, setCartCount] = useState(count);

  let [products, setProducts] = useState([] as ProductWithId[]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    loadProducts().then(data => {
      setLoaded(true);
      setProducts(data);
    });
  });

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
                cart={cartList}
                setCart={setCartList}
                cartCount={cartCount}
                setCartCount={setCartCount}
                products={products}
                setProducts={setProducts}
              />
            )}
          />
          <Route
            exact
            path="/admin"
            render={() => (
              <Admin
                token={authToken}
                setToken={setToken}
                products={products}
                setProducts={setProducts}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => (
              <Cart
                cartList={cartList}
                products={products}
                setCartList={setCartList}
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
