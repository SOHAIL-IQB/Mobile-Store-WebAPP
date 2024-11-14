import React from "react";

function Header() {
  return (
    <header className="flex px-16 py-8 justify-between items-center">
      <h2 className="text-6xl font-bold">
        <a href="#home">BakeLush</a>
      </h2>
      <nav className="flex items-center gap-8">
        <ul className="text-2xl flex gap-8">
          <li>About</li>
          <li>Shop</li>
          <li>
            <a href="#featured">Featured</a>
          </li>
          <li>Contact</li>
        </ul>
        <button className="pt-2">
          <span class="material-symbols-outlined">shopping_cart</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
