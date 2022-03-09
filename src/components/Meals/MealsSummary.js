import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delieverd To You</h2>
      <p>
        Choose you favourite meal from our broad section of available meals and
        enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time
        andd of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
