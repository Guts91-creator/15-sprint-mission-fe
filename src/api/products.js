export function getProducts({ page, pageSize, orderBy, keyword }) {
  const params = new URLSearchParams({
    page,
    pageSize,
    orderBy,
  });
  if (keyword) {
    params.append("keyword", keyword);
  }
  const url = `https://panda-market-api.vercel.app/products?${params.toString()}`;

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("상품을 불러오지 못했습니다.");
    }

    return response.json();
  });
}
