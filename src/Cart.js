import React from "react";
import CartItem from "./CartItem";
import "./Cart.scss";
const Cart = (props) => {
  const { items } = props;
  return (
    <div className="cart">
      {items.map((item) => {
        return (
          <CartItem
            item={item}
            key={item.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
};

export default Cart;
