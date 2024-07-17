import "./Card.css";

export default function Card({ data, addToCart }) {
  console.log(data);
  return (
    <div className="card">
      <div className="card__img-container">
        <img className="card__img" src={data.image.mobile} alt="Image" />
      </div>
      <button
        onClick={() => {
          addToCart(data);
        }}
        className="card__add-to-cart"
      >
        <img
          className="card__add-to-cart-btn"
          src="./assets/images/icon-add-to-cart.svg"
        />{" "}
        Add to cart
      </button>
      <button className="card__add-to-cart-btn card__item-added">
        <img
          className="card__increment-btn"
          src="./assets/images/icon-increment-quantity.svg"
        />{" "}
      </button>

      <div className="card__info">
        <h2 className="card__info-generic">{data.category}</h2>
        <h1 className="card__info-menu-name">{data.name}</h1>
        <h2 className="card__info-price">${data.price.toFixed(2)}</h2>
      </div>
    </div>
  );
}
