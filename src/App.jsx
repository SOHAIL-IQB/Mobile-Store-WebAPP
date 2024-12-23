import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Featured from "./components/pages/Featured";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Home />
      <Featured />
      <Products />
      <Footer />    
      <Cart />  
    </CartContextProvider>
  );
}

export default App;
