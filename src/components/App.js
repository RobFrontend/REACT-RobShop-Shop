import Footer from "./Footer";
import Header from "./Header";
import ProductBox from "./ProductBox";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <>
      <Header />
      <main className="section-shop grid--2-cols">
        <ProductBox />
        <ShoppingCart />
      </main>
      <Footer />
    </>
  );
}

export default App;
