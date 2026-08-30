import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  return (
    <>
      <Header />

      <main>
        <section>
          <h2>베스트 상품</h2>
          <ProductCard />
        </section>

        <section>
          <h2>판매 중인 상품</h2>
          <ProductCard />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProductListPage;
