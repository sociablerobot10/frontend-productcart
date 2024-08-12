import "./Card.css";
import { useState } from "react";

export default function Card({ data, addToCart, changeAmount }) {
  const [hiddenButton, setHiddenButton] = useState("");
  const [isAddToCartVisible, setisAddToCartVisible] = useState(true);
  const [itemCount, setItemCount] = useState(1);
  const decrementValue = () => {
    if (itemCount > 0) {
      setItemCount((itemCount) => itemCount - 1);
    }
    changeAmount(itemCount, data);
  };
  const incrementValue = () => {
    setItemCount((itemCount) => itemCount + 1);
    changeAmount(itemCount, data);
  };

  const cardDefaultBtn = document.querySelector(".card__add-to-cart");
  const addToCartBtn = document.querySelector(".card__add-to-cart-container ");
  const handleCardBtnClick = () => {
    setisAddToCartVisible(false);
    addToCart(data);
  };

  return (
    <div className="card">
      <div className="card__img-container">
        <img className="card__img" src={data.image.mobile} alt="Image" />
      </div>
      {isAddToCartVisible ? (
        <button onClick={handleCardBtnClick}>
          <img
            className="card__add-to-cart-btn"
            src="./assets/images/icon-add-to-cart.svg"
          />{" "}
          Add to cart
        </button>
      ) : (
        <div className="card__add-to-cart-container">
          <button
            onClick={incrementValue}
            className="card__add-to-cart-btn card__item-added"
          >
            <img
              className="card__increment-btn"
              src="./assets/images/icon-increment-quantity.svg"
            />{" "}
          </button>
          <p className="card__add-to-cart-value">{itemCount}</p>
          <button
            onClick={decrementValue}
            className="card__add-to-cart-btn card__item-added"
          >
            <img
              className="card__decrement-btn"
              src="./assets/images/icon-decrement-quantity.svg"
            />{" "}
          </button>
        </div>
      )}
      <div className="card__info">
        <h2 className="card__info-generic">{data.category}</h2>
        <h1 className="card__info-menu-name">{data.name}</h1>
        <h2 className="card__info-price">${data.price.toFixed(2)}</h2>
      </div>
    </div>
  );
}
