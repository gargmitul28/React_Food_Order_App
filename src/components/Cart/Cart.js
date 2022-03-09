import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useCntx } from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items, totalAmount, addItem, removeItem } = useCntx();
  const totalAmt = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const CartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const CartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((el) => {
        return (
          <CartItem
            key={el.id}
            name={el.name}
            price={el.price}
            amount={el.amount}
            onAdd={CartItemAddHandler.bind(null, el)}
            onRemove={CartItemRemoveHandler.bind(null, el.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal close={props.closeCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmt}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
