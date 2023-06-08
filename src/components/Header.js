import React from "react";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <NavLink to={`/`}>
          <a class="navbar-brand mr-3 text-warning">Fake Products</a>
        </NavLink>
      </nav>
    </>
  );
}
