import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductBox from "./ProductBox";
import ShoppingCart from "./ShoppingCart";
import shoesData from "../Data/shoesData";

function App() {
  // const [orders, setOrders] = useState([]);
  const [orders, setOrders] = useState(function () {
    const storedValue = localStorage.getItem("orders");
    return JSON.parse(storedValue);
  });
  const [cartToggle, setCartToggle] = useState(false);
  useEffect(
    function () {
      localStorage.setItem("orders", JSON.stringify(orders));
    },
    [orders]
  );
  function handleAddOrder(order) {
    setOrders((orders) => [...orders, order]);
  }
  function handleDeleteOrders() {
    setOrders((orders) => [...orders.filter((order) => !order)]);
  }
  function toggleCart() {
    setCartToggle(!cartToggle);
  }

  return (
    <>
      <Header orders={orders} toggleCart={toggleCart} shoesData={shoesData} />
      <main
        className={
          cartToggle === true ? "section-shop grid--2-cols" : "section-shop"
        }
      >
        <ProductBox
          orders={orders}
          setOrders={setOrders}
          onAddOrder={handleAddOrder}
          shoesData={shoesData}
        />
        {cartToggle === true ? (
          <ShoppingCart
            orders={orders}
            onAddOrder={handleAddOrder}
            onDeleteOrders={handleDeleteOrders}
            setOrders={setOrders}
            toggleCart={toggleCart}
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
