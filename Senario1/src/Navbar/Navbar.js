import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary ">
      <div className="container-fluid">
        <NavLink to="/accueil" className="nav-link m-2 link-offset-1">
          C-Timbres
        </NavLink>

        <div className="d-flex">
          <NavLink to="/accueil" className="nav-link m-2 link-offset-1">
            Accueil
          </NavLink>
          <NavLink to="/produits" className="nav-link m-2 link-offset-1">
            Produits
          </NavLink>
        </div>

        <SearchBar />
      </div>
    </nav>
  );
}

const SearchBar = () => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default Navbar;
