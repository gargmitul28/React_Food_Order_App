import React from "react";
import meals from "../../assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton clicked={props.onShowCart} />
      </header>
      <div>
        <img src={meals} alt="food img" className={classes["main-image"]} />
      </div>
    </>
  );
};

export default Header;
