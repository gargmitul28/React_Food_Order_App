import React from "react";
import { useCntx } from "../../store/cart-context";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { addItem } = useCntx();
  const addToCartHandler = (amt) => {
    addItem({
      id: props.id,
      name: props.name,
      amount: amt,
      price: props.price,
      key: props.id,
    });
  };

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      <div>
        <MealForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
