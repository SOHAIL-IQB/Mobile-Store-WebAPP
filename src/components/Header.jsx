import React, { useContext } from "react";
import CartContext from "../store/CartContext";

function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleShowCart() {
    cartCtx.showCart();
  }

  return (
    <header className="flex px-16 py-8 justify-between items-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
        <a href="#home">AAMNA MOBILES</a>
      </h2>
      <nav className="flex items-center gap-8">
        <ul className="hidden text-2xl lg:flex gap-8">
          <li>About</li>
          <li>Shop</li>
          <li>
            <a href="#featured">Featured</a>
          </li>
          <li>Contact</li>
        </ul>
        <button onClick={handleShowCart} className="relative px-4 py-2 bg-red-600 text-white rounded-lg outline-none hover:bg-red-700 transition-colors duration-200 shadow-lg">
          <span className="material-symbols-outlined text-2xl">
            shopping_cart
          </span>
          <span className="absolute -top-2 -right-4 bg-white text-red-700 text-md rounded-full px-3 py-1 shadow-md">
            {totalCartItems}
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
