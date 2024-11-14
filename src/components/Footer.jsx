import React from "react";

function Footer() {
  return (
    <footer className="px-16 py-24 w-full h-auto bg-slate-800 text-white text-lg grid grid-cols-1 md:grid-cols-4 gap-8">
      <section>
        <h2 className="text-2xl font-bold">
          <span>&copy;</span> BakeLush
        </h2>
        <p className="mt-4 text-md">
          Bringing joy and sweetness to your celebrations. At BakeLush, we craft
          the finest cakes with love and premium ingredients.
        </p>
      </section>

      <section id="quick-links" className="pl-8">
        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-md">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              FAQs
            </a>
          </li>
        </ul>
      </section>

      <section id="follow-us">
        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="hover:underline">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Pinterest
            </a>
          </li>
        </ul>
      </section>

      <section id="newsletter">
        <h3 className="text-xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-sm">
          Stay updated on the latest flavors, offers, and exclusive deals!
        </p>
        <form className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 text-black rounded mb-2"
          />
          <button
            type="submit"
            className="w-full bg-amber-500 text-black font-semibold py-2 rounded hover:bg-amber-600"
          >
            Subscribe
          </button>
        </form>
      </section>
    </footer>
  );
}

export default Footer;
