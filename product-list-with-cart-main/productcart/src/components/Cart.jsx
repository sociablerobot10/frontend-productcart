import CartItem from "./CartItem.jsx";
import empty_cart from "../assets/images/illustration-empty-cart.svg";
import "./Cart.css";
import carbon_neutral from "/src/assets/images/icon-carbon-neutral.svg";

function Cart({ items, deleteCartItem }) {
  const totalCost = () => {
    let total = 0;
    for (let item of items) {
      const cost = item.amount * item.product.price;
      total += cost;
    }
    return total;
  };

  const itemsAmout = () => {
    let amount = 0;
    for (let item of items) {
      amount += item.amount;
    }
    return amount;
  };

  return (
    <div className="cart">
      <h1 className="cart__heading">Your Cart ({itemsAmout()})</h1>
      {items.length === 0 ? (
        <>
          <div className="cart__img">
            <img src={empty_cart} alt="Empty Cart" />
          </div>

          <p className="cart__text">Your added items will appear here</p>
        </>
      ) : (
        <>
          <ul>
            {items.map((elem, index) => (
              <CartItem
                key={index}
                item={elem}
                deleteCartItem={deleteCartItem}
              />
            ))}
          </ul>

          <p className="cart__cost">
            Order Total
            <span className="cart__total-cost">${totalCost()}</span>
          </p>

          <div className="cart__tip">
            <img src={carbon_neutral} alt="Carbon Neutral" />
            This is a <span>carbon-neutral </span>
            delivery
          </div>
          <button className="cart__order-btn">Confirm Order</button>
        </>
      )}
    </div>
  );
}
export default Cart;
