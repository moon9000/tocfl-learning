import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/Home/HomePage";
import { LnPage } from "../../pages/LN/LnPage";
import { LoginPage } from "../../pages/Login/LoginPage";
import { RegisterPage } from "../../pages/Register/RegisterPage";
import { ListPage } from "../../pages/List/ListPage";
import { UserListsPage } from "../../pages/UserLists/UserListsPage";
import { ProfilePage } from "../../pages/Profile/ProfilePage";
import { Animes } from "../../pages/Animes/Animes";
import { Songs } from "../../pages/Songs/SongsPage";
import { TaiwanInfosPage } from "../../pages/TaiwanInfos/TaiwanInfosPage";

export function Main() {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/profile" component={ProfilePage}></Route>
      <Route exact path="/ln" component={LnPage}></Route>
      <Route
        exact
        path="/taiwan-residency-infos"
        component={TaiwanInfosPage}
      ></Route>
      <Route exact path="/register" component={RegisterPage}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/lists" component={UserListsPage}></Route>
      <Route exact path="/words" component={ListPage}></Route>
      <Route exact path="/animes" component={Animes}></Route>
      <Route exact path="/songs" component={Songs}></Route>
    </Switch>
  );
}
