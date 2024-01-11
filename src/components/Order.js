import { useState } from "react";

export default function Order({ orders, onDeleteOrder, prices, setPrices }) {
  const [quantity, setQuantity] = useState(1);

  function addPrices(price) {
    setPrices((prices) => [...prices, price]);
  }
  function deletePrices(price) {
    setPrices((prices) => prices.splice(-1));
  }
  function plusButton(price) {
    setQuantity(quantity + 1);
    addPrices(price);
  }
  function minusButton(price) {
    setQuantity(quantity - 1);
    deletePrices(price);
  }

  return (
    <>
      <div className="products-in-cart">
        <div className="product-in-cart">
          <div className="product-img-box">
            <img
              className="product-img"
              src={orders.photoName}
              alt={orders.name}
            />
          </div>
          <div className="product-in-cart-text">
            <p className="in-cart-name">{orders.name}</p>
            <p className="in-cart-price">
              ${(orders.price * quantity).toFixed(2)}
            </p>
            <p className="in-cart-size">US {orders.size}</p>

            <div className="quantity">
              <p>Quantity: </p>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button
                onClick={() =>
                  quantity > 1
                    ? minusButton(orders.price)
                    : onDeleteOrder(orders.id)
                }
              >
                -
              </button>
              <button
                onClick={() =>
                  quantity < 50 ? plusButton(orders.price) : quantity
                }
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
