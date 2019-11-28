import React, { Fragment } from "react";
import { FavouriteQuotes } from "../favouriteQuotes/favouriteQuotes";
import { QuoteofDay } from "../quoteofDay/quoteofDay";
import { QuoteSearch } from "../quoteSearch/quoteSearch";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

const navBar = {
  display: "flex",
  justifyContent: "center"
};
const navLink = {
  color: "#26A69A",
  padding: "12px 14px",
  textDecoration: "none",
  fontSize: "17px"
};
export const NavBar = () => (
  <BrowserRouter>
    <Fragment>
      <nav style={navBar}>
        <NavLink activeClassName="selected" style={navLink} to="/" exact={true}>
          QOD
        </NavLink>
        <NavLink activeClassName="selected" style={navLink} to="/search">
          SEARCH
        </NavLink>
        <NavLink activeClassName="selected" style={navLink} to="/favourites">
          FAV
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path="/" component={QuoteofDay} exact={true} />
          <Route path="/favourites" component={FavouriteQuotes} />
          <Route path="/search" component={QuoteSearch} />
        </Switch>
      </main>
    </Fragment>
  </BrowserRouter>
);
