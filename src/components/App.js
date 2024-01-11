import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductBox from "./ProductBox";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [orders, setOrders] = useState([]);
  const [cartToggle, setCartToggle] = useState(false);
  function handleAddOrder(order) {
    setOrders((orders) => [...orders, order]);
  }
  function handleDeleteOrders() {
    setOrders((order) => [...orders.filter((order) => !order)]);
  }
  function toggleCart() {
    setCartToggle(!cartToggle);
  }
  return (
    <>
      <Header orders={orders} toggleCart={toggleCart} />
      <main
        className={
          cartToggle === true ? "section-shop grid--2-cols" : "section-shop"
        }
      >
        <ProductBox onAddOrder={handleAddOrder} />
        {cartToggle === true ? (
          <ShoppingCart
            orders={orders}
            onAddOrder={handleAddOrder}
            onDeleteOrders={handleDeleteOrders}
            setOrders={setOrders}
          />
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
