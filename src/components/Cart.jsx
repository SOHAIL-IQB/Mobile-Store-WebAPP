import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";

function Cart() {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function handleDecreseItemQuantity(id) {
    cartCtx.removeItem(id);
  }

  function handleIncreaseItemQuantity(item) {
    cartCtx.addItem(item);
  }

  function handleCheckout() {
    if (cartCtx.items.length === 0) {
        alert('Add items to your cart to checkout.');
        cartCtx.hideCart();
        return;
    }
    alert('Order placed successfully! 🎉');
    cartCtx.removeAllItems();
    cartCtx.hideCart();
  }

  return (
    <Modal open={cartCtx.isOpen}>
      <header className="text-4xl mb-8 flex justify-between items-center">
        <h1>Your Cart</h1>
        <button
          onClick={cartCtx.hideCart}
          className="bg-white text-red-700 text-lg font-bold px-3 py-1 outline-none rounded-full hover:bg-gray-200 transition-colors duration-100 shadow-lg"
        >
          ✕
        </button>
      </header>

      <ul className="w-full mb-8">
        {cartCtx.items.map((item) => (
          <li
            key={item.id}
            className="w-full py-4 md:p-4 flex justify-between items-center border-b border-white"
          >
            <span className="w-2/3 flex items-center gap-4">
              <span className="w-[30%] flex-shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </span>
              <span>{item.name}</span>
            </span>
            <span className="text-md flex flex-col lg:flex-row items-center gap-2 md:gap-4">
              <span className="font-semibold">Rs. {item.price}</span>
              <span className="flex">
                <button
                  onClick={() => handleDecreseItemQuantity(item.id)}
                  className="px-2 text-red-700 bg-white rounded hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-2 md:px-4">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseItemQuantity(item)}
                  className="px-2 text-red-700 bg-white rounded hover:bg-gray-200"
                >
                  +
                </button>
              </span>
            </span>
          </li>
        ))}
      </ul>

      <p className="w-full flex justify-between items-center gap-2">
        <span className="w-3/5">
          Total: <span className="font-semibold">Rs. {cartTotal}</span>
        </span>
        <button onClick={handleCheckout} className="px-2 py-2 bg-white text-red-700 rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
          Checkout
        </button>
      </p>
    </Modal>
  );
}

export default Cart;
