import React, { useContext, useReducer } from "react";

const cntx = React.createContext();

export const useCntx = () => {
  return useContext(cntx);
};

const initialState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + actions.item.price * actions.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === actions.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      let updatedList;

      if (existingCartItem) {
        let updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + actions.item.amount,
        };

        updatedList = [...state.items];
        updatedList[existingCartItemIndex] = updatedItem;
      } else {
        updatedList = state.items.concat(actions.item);
      }

      return {
        items: updatedList,
        totalAmount: updatedTotalAmount,
      };
    }

    case "DEL": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === actions.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;
      let updatedItems;
      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== actions.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    default:
      return state;
  }
};

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "DEL", id: id });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <cntx.Provider value={cartContext}>{props.children}</cntx.Provider>;
};

export default ContextProvider;
