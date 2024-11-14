import React from "react";
import Header from "../Header";
import muffinImg from '/products/Muffin.jpg';

function Home() {
  return (
    <div id="home" className="w-full h-screen">
      <Header />
      <main className="px-16 my-16 h-3/5 flex items-center">
        <section className="content w-1/2 px-12 py-16">
          <h2 className="text-6xl font-bold mb-8">
            Your Sweet Journey <br /> Begins Here
          </h2>
          <p className="text-xl mb-8">
            BakeLush invites you to explore a world of delectable cakes, each
            crafted with love and care. Celebrate life's sweetest moments with
            our premium cakes, baked fresh and delivered right to your door.
          </p>
          <button className="px-8 py-4 text-xl bg-red-600 hover:bg-red-700 text-white">Find your dessert</button>
        </section>
        <section className="home-image w-1/2 p-28">
            <img src={muffinImg} alt="Muffin" className="rounded-full"/>
        </section>
      </main>
    </div>
  );
}

export default Home;
