import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductBox from "./ProductBox";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [orders, setOrders] = useState([]);
  function handleAddOrder(order) {
    setOrders((orders) => [...orders, order]);
  }
  return (
    <>
      <Header orders={orders} />
      <main className="section-shop grid--2-cols">
        <ProductBox onAddOrder={handleAddOrder} />
        <ShoppingCart orders={orders} />
      </main>
      <Footer />
    </>
  );
}

export default App;
