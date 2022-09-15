import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import AboutMe from "./components/AboutMePage";
import ProductIndexPage from "./components/ProductIndexPage";
import SearchIndexPage from "./components/SearchIndexPage";
import CheckoutPage from "./components/CheckoutPage";
import UserShowPage from "./components/UserShowPage";
import ProductShowPage from "./components/ProductShowPage";

function App() {

  return (
  <>
  <Navigation />
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <LoginFormPage />
      </Route>

      <Route path="/signup">
        <SignupFormPage />
      </Route>

      <Route path="/catalog">
        <ProductIndexPage />
      </Route>

      <Route path="/about-me">
        <AboutMe />
      </Route>

      <Route path="/search-results">
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

    </Switch>
  </>
  );
}

export default App;
