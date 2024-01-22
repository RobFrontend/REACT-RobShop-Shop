import { useState } from "react";

export default function Order({ order, orders, setOrders, onDeleteOrder }) {
  const [quantity, setQuantity] = useState(order.quantity);

  function plusButton() {
    const existingOrder = orders.find(
      (o) => (o.name === order.name) & (o.size === order.size)
    );

    if (existingOrder) {
      setOrders((orders) =>
        orders.map((o) =>
          o === existingOrder ? { ...o, quantity: o.quantity + 1 } : o
        )
      );
    }
  }

  function minusButton() {
    const existingOrder = orders.find(
      (o) => (o.name === order.name) & (o.size === order.size)
    );
    if (existingOrder) {
      setOrders((orders) =>
        orders.map((o) =>
          o === existingOrder ? { ...o, quantity: o.quantity - 1 } : o
        )
      );
    }
  }

  return (
    <>
      <div className="products-in-cart">
        <div className="product-in-cart">
          <div className="product-img-box">
            <img
              className="product-img"
              src={order.photoName}
              alt={order.name}
            />
          </div>
          <div className="product-in-cart-text">
            <p className="in-cart-name">{order.name}</p>
            <p className="in-cart-price">
              ${(order.price * order.quantity).toFixed(2)}
            </p>
            <p className="in-cart-size">US {order.size}</p>

            <div className="quantity">
              <p>Quantity: </p>
              <input
                disabled
                type="text"
                value={order.quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button
                onClick={() =>
                  order.quantity > 1 ? minusButton() : onDeleteOrder(order.id)
                }
              >
                -
              </button>
              <button
                onClick={() => (order.quantity < 50 ? plusButton() : quantity)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
