import React from "react";
import { CartItemWrapper } from "./style";
import { FaTrashAlt } from "react-icons/fa";

const CartItemCard = ({ cartItem, removeFromCart }) => {
  return (
    <CartItemWrapper className="grid">
      <div className="cart-item-img">
        <img
          src={`http://localhost:5000/${cartItem.image.replace(/\\/g, "/")}`}
          alt={cartItem.course_name}
        />
      </div>
      <div className="cart-item-info">
        <p className="fw-7 fs-15">{cartItem.course_name}</p>
        <span className="cart-item-creator fs-13 opacity-09">
          By {cartItem.creator}
        </span>
        <div className="fw-7 text-purple">${cartItem.discounted_price}</div>
        <div className="cart-item-category">{cartItem.category}</div>
        <br />
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeFromCart(cartItem.courseID)}
        >
          Remove{" "}
          <span>
            <FaTrashAlt />
          </span>
        </button>
      </div>
    </CartItemWrapper>
  );
};

export default CartItemCard;
