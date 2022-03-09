import React, { useRef } from "react";
import Input from "../UI/Input";
import cls from "./MealForm.module.css";

const MealForm = (props) => {
  const amountInputRef = useRef();

  const clickHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmt = +enteredAmount;

    props.onAddToCart(enteredAmt);
  };

  return (
    <form className={cls.form} onSubmit={clickHandler}>
      <Input
        label="Amount"
        input={{
          ref: amountInputRef,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> +Add</button>
    </form>
  );
};

export default MealForm;
