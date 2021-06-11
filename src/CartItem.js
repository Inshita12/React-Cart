import React from "react";
import "./CartItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus, faTrash);
const CartItem = (props) => {
  const { price, title, qty } = props.item;
  const { item, onDecreaseQuantity, onIncreaseQuantity, onDelete } = props; //Destructuring
  return (
    <div className="cart-item">
      <div className="left-block">
        <img className="image" src={item.img}alt=""></img>
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs{price}</div>
        <div style={{ color: "#777" }}>Qty:{qty}</div>
        <FontAwesomeIcon
          icon="plus"
          onClick={() => {
            onIncreaseQuantity(item);
          }}
        />
        &ensp;
        <FontAwesomeIcon
          icon="minus"
          onClick={() => {
            onDecreaseQuantity(item);
          }}
        />
        &ensp;
        <FontAwesomeIcon
          icon="trash"
          onClick={() => {
            onDelete(item.id);
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
