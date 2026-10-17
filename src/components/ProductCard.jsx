import heartIcon from "../assets/icons/ic_heart.svg";
import "./ProductCard.css";

function ProductCard({ image, name, price, favoriteCount }) {
  return (
    <article>
      <img className="product-image" src={image} alt={name} />

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>

        <div className="product-favorite">
          <img src={heartIcon} alt="" />
          <span>{favoriteCount}</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
