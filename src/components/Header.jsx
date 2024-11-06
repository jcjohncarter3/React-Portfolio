import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <h1>
      <Link to="/">
        John Carter</Link>
      </h1>
      <Navigation />
    </header>
  );
}


