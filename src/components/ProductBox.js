import { useState } from "react";

import Product from "./Product";

export default function ProductBox({ onAddOrder, shoesData }) {
  const [sort, setSort] = useState("default");
  const [sortBrand, setSortBrand] = useState("all");
  const [search, setSearch] = useState("");

  if (sort === "brandZ") shoesData.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "brandA") shoesData.sort((a, b) => b.name.localeCompare(a.name));
  if (sort === "priceUp") shoesData.sort((a, b) => a.price - b.price);
  if (sort === "priceDown") shoesData.sort((a, b) => b.price - a.price);
  if (sort === "default") shoesData.sort((a, b) => a.id - b.id);

  if (sortBrand === "Jordan")
    shoesData = shoesData.filter((shoe) => shoe.brand === "Jordan");
  if (sortBrand === "Nike")
    shoesData = shoesData.filter((shoe) => shoe.brand === "Nike");
  if (sortBrand === "PF. Flyers")
    shoesData = shoesData.filter((shoe) => shoe.brand === "PF. Flyers");
  function searchShoe(e) {
    e.preventDefault();
    if (
      shoesData.filter((shoe) =>
        shoe.name.toLowerCase().trim().includes(search)
      )
    )
      shoesData = shoesData.filter((shoe) =>
        shoe.name.toLowerCase().trim().includes(search)
      );
    setSearch("");
  }
  if (
    shoesData.filter((shoe) => shoe.name.toLowerCase().trim().includes(search))
  )
    shoesData = shoesData.filter((shoe) =>
      shoe.name.toLowerCase().trim().includes(search)
    );

  return (
    <section className="section-products">
      <h1>Choose Your Own Style</h1>
      <div className="sort-boxes">
        <div className="sort-box">
          <p>Sort:</p>
          <select
            className="select-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="brandZ">A-Z</option>
            <option value="brandA">Z-A</option>
            <option value="priceUp">Price up</option>
            <option value="priceDown">Price down</option>
          </select>
        </div>
        <div className="sort-box">
          <p>Brand:</p>
          <select
            className="select-sort"
            value={sortBrand}
            onChange={(e) => setSortBrand(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Jordan">Jordan</option>
            <option value="Nike">Nike</option>
            <option value="PF. Flyers">P.F Flyers</option>
          </select>
        </div>
        <form className="form-search" onSubmit={searchShoe}>
          <input
            className="input-search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
            placeholder="Search...          (Enter for reset)"
          />
        </form>
      </div>

      <div className="product-boxes">
        {shoesData.map((shoe) => (
          <Product shoesObj={shoe} key={shoe.id} onAddOrder={onAddOrder} />
        ))}
      </div>
    </section>
  );
}
