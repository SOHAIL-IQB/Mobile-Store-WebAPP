import React from "react";
import { CAKES } from "../../products";
import Card from "../UI/Card";

function Products() {
  return (
    <div id="#products" className="px-16 w-full py-16">
      <h2 className="text-6xl font-bold text-center mb-16">Products</h2>
      <ul className="flex flex-wrap justify-center gap-20">
        {CAKES.map(cake => (<Card key={cake.id} cake={cake} />))}
      </ul>
    </div>
  );
}

export default Products;
