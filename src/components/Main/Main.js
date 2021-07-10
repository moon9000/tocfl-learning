import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/Home/HomePage";

export function Main() {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={HomePage}></Route>
    </Switch>
  );
}
