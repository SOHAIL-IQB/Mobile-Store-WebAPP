import React from "react";
import Card from "../UI/Card";
import { CAKES } from "../../products";

function Featured() {
  return (
    <div id="featured" className="p-16 w-full">
      <h2 className="text-6xl font-bold text-center mb-16">Featured</h2>
      <ul className="flex flex-wrap justify-center gap-20">
        {CAKES.map((cake) => {
          if (cake.id < 4)
          return <Card key={cake.id} cake={cake} />
        })}
      </ul>
    </div>
  );
}

export default Featured;
