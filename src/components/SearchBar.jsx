import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <form className="searchBar">
      <input type="text" placeholder="Insira aqui o nome da cidade" />
      <button type="submit" onClick={(e) => window.alert("clicked")}>
        🔍
      </button>
    </form>
  );
}
