import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import "./ProductListPage.css";
import searchIcon from "../assets/icons/ic_search.svg";

function ProductListPage() {
  return (
    <>
      <Header />

      <main className="product-list-page">
        <section className="best-products">
          <h2>베스트 상품</h2>
          <div className="best-product-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>

        <section className="all-products">
          <div className="all-products-header">
            <h2>판매 중인 상품</h2>

            <div className="product-controls">
              <div className="search-box">
                <img src={searchIcon} alt="" />

                <input
                  type="search"
                  placeholder="검색할 상품을 입력해주세요"
                  aria-label="상품 검색"
                />
              </div>

              <button type="button" className="button product-register-button">
                상품 등록하기
              </button>

              <select className="sort-select" aria-label="상품 정렬">
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
          </div>

          <div className="all-products-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <nav className="pagination" aria-lable="상품 목록 페이지">
            <button type="button">‹</button>
            <button type="button" aria-current="page">
              1
            </button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">›</button>
          </nav>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProductListPage;
