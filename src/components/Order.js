export default function Order({ orders, quantity, setQuantity }) {
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
            <p className="in-cart-price">${orders.price}</p>
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
                  quantity > 1 ? setQuantity(quantity - 1) : quantity
                }
              >
                -
              </button>
              <button
                onClick={() =>
                  quantity < 50 ? setQuantity(quantity + 1) : quantity
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
