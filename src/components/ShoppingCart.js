import { useState } from "react";
import Order from "./Order";

export default function ShoppingCart({
  orders,
  onAddOrder,
  onDeleteOrders,
  setOrders,
}) {
  const promotionCode = "RobShop30";
  const [promotion, setPromotion] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    if (description === promotionCode) setPromotion(0.7);
    if (description !== promotionCode);
    setDescription("");
  }
  function handleDeleteOrder(id) {
    setOrders((orders) => orders.filter((order) => order.id !== id));
  }
  const priceBeforePromo = orders
    .reduce((acc, order) => acc + order.price * order.quantity, 0)
    .toFixed(2);
  const finalPrice = (
    orders.reduce((acc, order) => acc + order.price * order.quantity, 0) *
    promotion
  ).toFixed(2);

  function resetOrders() {
    onDeleteOrders();

    setPromotion(1);
  }

  return (
    <section className="section-shopping-cart">
      <h2>Shopping cart</h2>
      {orders.length > 0 ? (
        <>
          <div className="products-in-cart-boxes">
            {orders.map((order) => (
              <Order
                orders={orders}
                order={order}
                setOrders={setOrders}
                onDeleteOrder={handleDeleteOrder}
                onAddOrder={onAddOrder}
                key={order.id}
              />
            ))}
          </div>
          <div className="promotion-box">
            <h3>Promotion Code:</h3>
            <form className="form-promo" onSubmit={handleSubmit}>
              <input
                className="promotion-input"
                type="text"
                placeholder="Promo Code"
                value={description}
                onChange={(e) => setDescription(e.target.value.trim())}
              />
              <button className="add-promo">Add</button>
            </form>
          </div>

          <div className="summary-box">
            <h3>Summary:</h3>
            {promotion === 1 ? (
              <p className="price-all">${finalPrice}</p>
            ) : (
              <p className="price-all">
                <span
                  style={{
                    textDecoration: "line-through",
                    opacity: "0.5",
                    fontSize: "2.4rem",
                  }}
                >
                  ${priceBeforePromo}
                </span>{" "}
                ${finalPrice}
              </p>
            )}

            <button>Buy</button>
          </div>
          <div className="reset-orders-box">
            <button className="reset-orders" onClick={resetOrders}>
              Reset cart
            </button>
          </div>
        </>
      ) : (
        <h2 className="empty-cart">Empty</h2>
      )}
    </section>
  );
}
