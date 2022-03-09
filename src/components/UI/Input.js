import React from "react";
import cls from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={cls.input}>
      <label className={cls.label}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
