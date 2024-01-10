import shoesData from "../Data/shoesData";

export default function ProductBox() {
  return (
    <section className="section-products">
      <h1>Choose Your Own Style</h1>
      <div className="product-boxes">
        {shoesData.map((shoe) => (
          <Product shoesObj={shoe} key={shoe.name} />
        ))}
      </div>
    </section>
  );
}

export function Product({ shoesObj }) {
  return (
    <div className="product-box">
      <div className="product-img-box">
        <img
          className="product-img"
          src={shoesObj.photoName}
          alt={shoesObj.name}
        />
      </div>
      <div className="product-text-box">
        <h2 className="shoe-name">{shoesObj.name}</h2>
        <div className="size-price">
          <h3 className="shoe-price">${shoesObj.price.toFixed(2)}</h3>
          <label>
            <p className="p-size">
              Size:
              <select className="select-size">
                {shoesObj.sizes.map((sizes) => (
                  <option
                    className="option-size"
                    value={sizes}
                    key={shoesObj.name}
                  >
                    US {sizes}
                  </option>
                ))}
              </select>
            </p>
          </label>
        </div>
        <button className="buy-btn">Add to cart</button>
      </div>
    </div>
  );
}
