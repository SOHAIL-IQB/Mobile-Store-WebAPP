import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Details from "../Details";

function Card({ cake }) {
  const cartCtx = useContext(CartContext);
  const [productId, setProductId] = useState(null);

  function handleAddItemToCart() {
    cartCtx.addItem(cake);
  }

  return (
    <>
      <Details cake={cake} id={productId} setId={setProductId} />
      <div className="w-80 h-90 p-3 flex flex-col gap-1">
        <div className="mb-4">
          <img src={cake.imageUrl} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span onClick={() => setProductId(cake.id)} className="text-xl font-bold hover:underline cursor-pointer">{cake.name}</span>
              <p className="text-xs text-gray-700">{cake.category}</p>
            </div>
            <span className="font-bold  text-red-600">Rs. {cake.price}</span>
          </div>
          <button
            onClick={handleAddItemToCart}
            className="hover:bg-slate-700 text-gray-50 bg-slate-800 py-2"
          >
            Add to cart
          </button>
        </div>
      </div> 
    </>
  );
}

export default Card;
