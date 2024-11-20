import React from "react";
import Modal from "./UI/Modal";

function Details({ cake, id, setId }) {
  return (
    <Modal open={id !== null} onClose={() => setId(null)}>
      <main className="w-full">
        <header className="text-4xl mb-8 flex justify-between items-center">
          <h1>{cake.name}</h1>
          <button
            onClick={() => setId(null)}
            className="bg-white text-red-700 text-lg font-bold px-3 py-1 outline-none rounded-full hover:bg-gray-200 transition-colors duration-100 shadow-lg"
          >
            ✕
          </button>
        </header>
        <section>
          <div className="mb-4">
            <img src={cake.imageUrl} alt="" />
          </div>
          <div>
            <p className="flex items-center justify-between font-bold text-xl mb-2"><span>Rs. {cake.price}</span><span>{cake.rating} ⭐</span></p>
            <p className="w-1/5 p-1 mb-4 bg-white text-lg text-center text-red-700">
              {cake.weight}
            </p>
            <p className="mb-4">{cake.description}</p>
            <div>
              <p className="mb-2 font-bold">Ingredients</p>
              <ul className="flex flex-wrap gap-2">
                {cake.ingredients.map((ing) => (
                  <li className="bg-white text-red-700 p-1 px-2 rounded-2xl" key={ing}>{ing}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Modal>
  );
}

export default Details;
