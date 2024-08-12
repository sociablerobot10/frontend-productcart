import CartItem from "./CartItem.jsx";
import { useRef, useEffect } from "react";
import { totalCost } from "./Cart.jsx";
import "./Receipt.css";
import checkmark from "/assets/images/icon-order-confirmed.svg";

function Receipt({ items, open, startNewOrder }) {
  const total = totalCost(items);
  const ref = useRef();
  useEffect(() => {
    if (open === true) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);
  /**
   * use useEffect instead of:
   *  <dialog open ={open}/>
   * Because it's not recommened based on Mozilla as it would be consider non-modal
   */

  return (
    <dialog ref={ref} className="receipt">
      <img src={checkmark} alt="checkmark" className="checkmark" />
      <h1 className="receipt__header">Order Confirmed</h1>
      <p>We hope you enjoy your food!</p>
      <div className="receipt__items">
        <ul>
          {items.map((elem, index) => (
            <CartItem item={elem} key={index} />
          ))}
        </ul>
        <p className="cart__cost">
          Order Total
          <span className="cart__total-cost">${total}</span>
        </p>
      </div>

      <button className="receipt_btn" onClick={startNewOrder}>
        Start New Order
      </button>
    </dialog>
  );
}
export default Receipt;
