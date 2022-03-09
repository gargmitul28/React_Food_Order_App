import React from "react";
import Card from "../UI/Card";
import cls from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const totItems = DUMMY_MEALS.map((el) => {
    return (
      <MealItem
        id={el.id}
        key={el.id}
        name={el.name}
        price={el.price}
        description={el.description}
      />
    );
  });
  return (
    <section className={cls.meals}>
      <Card>
        <ul>{totItems}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
