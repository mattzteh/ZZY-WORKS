import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import UserShowPage from "./components/UserShowPage";
import ProductIndexPage from "./components/ProductIndexPage";
import ProductShowPage from "./components/ProductShowPage";
import CheckoutPage from "./components/CheckoutPage";
import SearchBar from "./components/SearchBar";
import SearchIndexPage from "./components/SearchIndexPage";

function App() {

  return (
  <>
  <Navigation />
    <Switch>

      <Route path="/login">
        <LoginFormPage />
      </Route>

      <Route path="/signup">
        <SignupFormPage />
      </Route>

      <Route path="/catalog">
        <ProductIndexPage />
      </Route>

      <Route path="/SearchResults">
        <SearchIndexPage />
      </Route>

      <Route path="/checkout">
        <CheckoutPage />
      </Route>

      <Route path="/products/:productId">
        <ProductShowPage />
      </Route>

      <Route path="/users/:id">
        <UserShowPage />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>

    </Switch>
  </>
  );
}

export default App;
