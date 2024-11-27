import React from "react";
import Header from "../Header";

function Home() {
  return (
    <div id="home" className="relative w-full h-screen bg-home bg-cover">
      <div id="overlay" className="text-white top-0 left-0 w-full h-full bg-[#0008]">
      <Header />
      <main className="px-16 pb-16 my-16 h-3/5 justify-center lg:justify-start flex items-center">
        <section className="content lg:w-1/2 h-full px-12 py-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
          Your Perfect Device Awaits
          </h2>
          <p className="hidden sm:block text-lg lg:text-xl mb-8">
          Welcome to AAMNA MOBILE, your destination for the latest smartphones.
          Discover high-performance devices and stylish designs, all delivered
          right to your doorstep. Start your mobile journey with us today!
          </p>
          <button className="px-8 py-4 mt-8 sm:mt-0 text-nowrap md:text-xl bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 shadow-lg">Find your Phone</button>
        </section>
        {/* <section className="hidden md:block home-image w-1/2 p-28">
            <img src={muffinImg} alt="Muffin" className="rounded-full"/>
        </section> */}
      </main>
      </div>
    </div>
  );
}

export default Home;
