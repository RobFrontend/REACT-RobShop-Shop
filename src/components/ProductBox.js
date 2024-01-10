import shoesData from "../Data/shoesData";
import Product from "./Product";

export default function ProductBox({ onAddOrder }) {
  return (
    <section className="section-products">
      <h1>Choose Your Own Style</h1>
      <div className="product-boxes">
        {shoesData.map((shoe) => (
          <Product shoesObj={shoe} key={shoe.id} onAddOrder={onAddOrder} />
        ))}
      </div>
    </section>
  );
}
