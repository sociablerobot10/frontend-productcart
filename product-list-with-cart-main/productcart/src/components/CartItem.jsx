import remove_icon from "/src/assets/images/icon-remove-item.svg";
import "./CartItem.css";

function CartItem({ item, deleteCartItem }) {
  return (
    <li className="cartItem">
      {!deleteCartItem && (
        <div className="cartItem__img">
          <img src={item.product.image.thumbnail} alt={item.product.name} />
        </div>
      )}

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

      {deleteCartItem ? (
        <button
          className="cartItem__remove-btn"
          onClick={() => deleteCartItem(item)}
        >
          <img src={remove_icon} alt="Remove Icon" />
        </button>
      ) : (
        <h3>${item.product.price * item.amount}</h3>
      )}
    </li>
  );
}
export default CartItem;
