import React from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useCntx } from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const { items } = useCntx();
  const totItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.clicked}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totItems}</span>
    </button>
  );
};

export default HeaderCartButton;
