import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
  items: [],
  isOpen: false,
  addItem: (item) => {},
  removeItem: (id) => {},
  showCart: () => {},
  hideCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.item.id
    );
    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.payload.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  } else if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cartItems, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  function showCart() {
    setIsCartOpen(true);
  }

  function hideCart() {
    setIsCartOpen(false);
  }

  function addItem(item) {
    cartDispatch({ type: "ADD_ITEM", payload: { item: item } });
  }

  function removeItem(id) {
    cartDispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  }

  const cartCtx = {
    items: cartItems.items,
    isOpen: isCartOpen,
    addItem,
    removeItem,
    showCart,
    hideCart,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
}

export default CartContext;
