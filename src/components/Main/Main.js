import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/Home/HomePage";
import { LnPage } from "../../pages/LN/LnPage";
import { LoginPage } from "../../pages/Login/LoginPage";
import { ListPage } from "../../pages/List/ListPage";
import { Animes } from "../../pages/Animes/Animes";
export function Main() {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/ln" component={LnPage}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/words" component={ListPage}></Route>
      <Route exact path="/animes" component={Animes}></Route>
    </Switch>
  );
}
