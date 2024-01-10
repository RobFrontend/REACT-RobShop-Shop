import { useState } from "react";
import Order from "./Order";

export default function ShoppingCart({ orders }) {
  const [quantity, setQuantity] = useState(1);
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

  return (
    <section className="section-shopping-cart">
      <h2>Shopping cart</h2>
      {orders.length > 0 ? (
        <>
          {orders.map((order) => (
            <Order
              orders={order}
              quantity={quantity}
              setQuantity={setQuantity}
              key={order.id}
            />
          ))}
          <div className="promotion-box">
            <h3>Promotion Code:</h3>
            <form className="form-promo" onSubmit={handleSubmit}>
              <input
                className="promotion-input"
                type="text"
                placeholder="Promo Code"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className="add-promo">Add</button>
            </form>
          </div>
          <div className="summary-box">
            <h3>Summary:</h3>
            <p className="price-all">
              $
              {orders
                .reduce(
                  (acc, order) => acc + order.price * quantity * promotion,
                  0
                )
                .toFixed(2)}
            </p>
            <button>Buy</button>
          </div>
        </>
      ) : (
        <h2 className="empty-cart">Empty</h2>
      )}
    </section>
  );
}
