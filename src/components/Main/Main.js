import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/Home/HomePage";
import { LnPage } from "../../pages/LN/LnPage";
import { ListPage } from "../../pages/List/ListPage";
import { UserListsPage } from "../../pages/UserLists/UserListsPage";
import { Animes } from "../../pages/Animes/Animes";
import { TaiwanInfosPage } from "../../pages/TaiwanInfos/TaiwanInfosPage";

export function Main() {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/ln" component={LnPage}></Route>
      <Route
        exact
        path="/taiwan-residency-infos"
        component={TaiwanInfosPage}
      ></Route>
      <Route exact path="/lists" component={UserListsPage}></Route>
      <Route exact path="/words" component={ListPage}></Route>
      <Route exact path="/animes" component={Animes}></Route>
    </Switch>
  );
}
