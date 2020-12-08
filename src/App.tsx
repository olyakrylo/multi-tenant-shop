import React, { useEffect, useState } from "react";
import "./App.css";
import { Admin, MainPage, Cart, Header, Loader } from "./components";
import { Route, Switch } from "react-router-dom";
import { CartType, ProductWithId } from "./data/shared";
import { loadProducts } from "./middleware";
import { Error } from "./components/Error/Error";

function App() {
  const [authToken, setToken] = useState(getToken());

  const [products, setProducts] = useState([] as ProductWithId[]);
  const [loaded, setLoaded] = useState(false);

  const [cartList, setCartList] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (loaded) return;
    loadProducts().then((data) => {
      setProducts(data);
      updateCart();
      setLoaded(true);
    });
  });

  function updateCart() {
    const { count, cartData } = getCart();
    setCartList(cartData);
    setCartCount(count);
  }

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

    let parsedData = JSON.parse(data[0].slice(5)) as CartType;
    parsedData = Object.entries(parsedData)
      .filter(([id, _]) => {
        const item = products?.find((item) => item.id.toString() === id);
        return item && item.is_available;
      })
      .reduce((prev, [id, count]) => ({
        ...prev,
        [id]: count,
      }), {} as CartType)

    return {
      count: Object.values(parsedData).reduce((prev, curr) => prev + curr, 0),
      cartData: parsedData,
    };
  }

  return (
    <div className="App">
      {!loaded && <Loader />}

      <Header authToken={authToken} setToken={setToken} cartCount={cartCount} />

      <Error message={error} show={!!error} setError={setError} />

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
                setError={setError}
                updateCart={updateCart}
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
