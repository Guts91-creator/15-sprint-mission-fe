import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import "./ProductListPage.css";
import searchIcon from "../assets/icons/ic_search.svg";
import { getProducts } from "../api/products";

function ProductListPage() {
  const [bestProducts, setBestProducts] = useState([]);
  const [bestLoading, setBestLoading] = useState(true);
  const [bestError, setBestError] = useState(null);

  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState(null);

  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const totalPages = Math.ceil(totalCount / 5);
  const startPage = Math.floor((page - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);
  const visiblePageCount = endPage - startPage + 1;
  const pageNumbers = Array.from(
    { length: visiblePageCount },
    (_, index) => startPage + index,
  );

  useEffect(() => {
    getProducts({ page: 1, pageSize: 4, orderBy: "favorite" })
      .then((data) => {
        setBestProducts(data.list);
        setBestLoading(false);
      })
      .catch((error) => {
        setBestError(error);
        setBestLoading(false);
      });
  }, []);

  useEffect(() => {
    getProducts({ page, pageSize: 5, orderBy, keyword })
      .then((data) => {
        setProducts(data.list);
        setTotalCount(data.totalCount);
        setProductsLoading(false);
      })
      .catch((error) => {
        setProductsError(error);
        setProductsLoading(false);
      });
  }, [keyword, orderBy, page]);

  return (
    <>
      <Header />

      <main className="product-list-page">
        <section className="best-products">
          <h2>베스트 상품</h2>
          <div className="best-product-list">
            {bestLoading ? (
              <p>불러오는 중...</p>
            ) : bestError ? (
              <p>베스트 상품을 불러오지 못했습니다.</p>
            ) : (
              bestProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.images[0]}
                  name={product.name}
                  price={product.price}
                  favoriteCount={product.favoriteCount}
                />
              ))
            )}
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
                  value={keyword}
                  onChange={(event) => {
                    setProductsLoading(true);
                    setProductsError(null);
                    setKeyword(event.target.value);
                    setPage(1);
                  }}
                />
              </div>

              <button type="button" className="button product-register-button">
                상품 등록하기
              </button>

              <select
                value={orderBy}
                onChange={(event) => {
                  setOrderBy(event.target.value);
                  setPage(1);
                }}
                className="sort-select"
                aria-label="상품 정렬"
              >
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
          </div>

          <div className="all-products-list">
            {productsLoading ? (
              <p>불러오는 중...</p>
            ) : productsError ? (
              <p>상품을 불러오지 못했습니다.</p>
            ) : (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.images[0]}
                  name={product.name}
                  price={product.price}
                  favoriteCount={product.favoriteCount}
                />
              ))
            )}
          </div>

          <nav className="pagination" aria-lable="상품 목록 페이지">
            <button
              type="button"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              ‹
            </button>
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                aria-current={page === pageNumber ? "page" : undefined}
              >
                {pageNumber}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              disabled={page >= totalPages}
            >
              ›
            </button>
          </nav>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProductListPage;
