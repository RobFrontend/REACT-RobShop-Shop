import { useState } from "react";

export default function Product({ shoesObj, onAddOrder }) {
  const [selectedSize, setSelectedSize] = useState(shoesObj.sizes[0]);
  function handleSizeChange(e) {
    setSelectedSize(Number(e.target.value));
  }
  function handleAddToCart() {
    if (!selectedSize) return;

    const newOrder = {
      photoName: shoesObj.photoName,
      name: shoesObj.name,
      price: shoesObj.price,
      discount: shoesObj.discount,
      size: selectedSize,
      brand: shoesObj.brand,
      id: Date.now(),
    };
    onAddOrder(newOrder);
  }
  return (
    <div className="product-box">
      <div className="product-img-box">
        <img
          className="product-img"
          src={shoesObj.photoName}
          alt={shoesObj.id}
        />
      </div>
      <div className="product-text-box">
        <h2 className="shoe-name">{shoesObj.name}</h2>
        <div className="size-price">
          <h3 className="shoe-price">${shoesObj.price.toFixed(2)}</h3>
          <label>
            <p className="p-size">
              Size:
              <select
                className="select-size"
                onChange={handleSizeChange}
                value={selectedSize}
              >
                {shoesObj.sizes.map((sizes, i) => (
                  <option
                    className="option-size"
                    value={sizes}
                    key={`${shoesObj.id}-${i}`}
                  >
                    US {sizes}
                  </option>
                ))}
              </select>
            </p>
          </label>
        </div>
        <button className="buy-btn" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
