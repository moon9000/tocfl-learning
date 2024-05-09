import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/Home/HomePage";
import { ListPage } from "../../pages/List/ListPage";

export function Main() {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/words" component={ListPage}></Route>
    </Switch>
  );
}
