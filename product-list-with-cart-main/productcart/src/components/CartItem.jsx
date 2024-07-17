import remove_icon from "/src/assets/images/icon-remove-item.svg";
import "./CartItem.css";

function CartItem({ item, deleteCartItem }) {
  return (
    <li className="cartItem">
      <div className="cartItem__info">
        <h3 className="cartItem__header">{item.product.name}</h3>
        <div>
          <span className="cartItem__product-amount">{item.amount}x</span>
          <span className="cartItem__product-price">
            @ ${item.product.price}{" "}
          </span>
          <span className="cartItem__product-total">
            {" "}
            ${item.product.price * item.amount}
          </span>
        </div>
      </div>
      <button
        className="cartItem__remove-btn"
        onClick={() => deleteCartItem(item)}
      >
        <img src={remove_icon} alt="Remove Icon" />
      </button>
    </li>
  );
}
export default CartItem;
