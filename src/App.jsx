import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import Products from "./components/Products";

function App() {

  const toggle = useSelector((state)=>state.ui.cartIsVisible)
  return (
    <div className="App">
      <Header />
     {
      toggle &&  <Cart />
     }
     <Products/>
    </div>
  );
}

export default App;
