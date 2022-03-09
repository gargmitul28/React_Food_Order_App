import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import ContextProvider from "./store/cart-context";

function App(props) {
  const [isClicked, setisClicked] = useState(false);

  const showCart = () => {
    setisClicked(true);
  };

  const hideCart = () => {
    setisClicked(false);
  };

  return (
    <ContextProvider>
      <Header onShowCart={showCart} />
      <Meals />
      {isClicked && <Cart closeCart={hideCart} />}
    </ContextProvider>
  );
}

export default App;
