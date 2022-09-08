import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import UserShowPage from "./components/UserShowPage";
import ProductIndexPage from "./components/ProductIndexPage";
import ProductShowPage from "./components/ProductShowPage";

function App() {

  return (
  <>
  <Navigation/>
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
      <Route path="/store">
        <ProductIndexPage />
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
