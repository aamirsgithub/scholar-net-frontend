import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  // NotFoundWrapper,
  // CartWrapper,
  // CartPageTitle,
  // CartGrid,
  // CartGridLeft,
  // CartCountInfo,
  // CartClearButton,
  // CartItemsList,
  // CartTotal,
  // CartTotalValue,
  // CheckoutButton,
  NoItemsInCart,
} from "./style";
import { MdClear } from "react-icons/md";
import CartItemCard from "./CartItemCard";
import Navbar from "../Navbar/Navbar";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const loadedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(loadedCartItems);
    const total = loadedCartItems.reduce(
      (acc, item) => acc + parseFloat(item.discounted_price),
      0
    );
    setTotalAmount(total);
  }, []);

  const removeFromCart = (courseID) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.courseID !== courseID
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    // Update total amount as well
    const total = updatedCartItems.reduce(
      (acc, item) => acc + parseFloat(item.discounted_price),
      0
    );
    setTotalAmount(total);
  };

  const clearCart = () => {
    localStorage.setItem("cartItems", JSON.stringify([]));
    setCartItems([]);
    setTotalAmount(0);
  };

  const totalItems = cartItems.length;

  if (cartItems.length < 1) {
    return (
      <>
        <Navbar />
        <NotFoundWrapper>
          <NoItemsInCart>No items found in the cart.</NoItemsInCart>
        </NotFoundWrapper>
      </>
    );
  }

  return (
    <>
      <Navbar totalItems={totalItems} />
      <CartWrapper>
        <div className="container">
          <div className="cart-pg-title">
            <h3>Shopping Cart</h3>
          </div>
          <div className="cart-grid grid">
            {/* card grid left */}
            <div className="cart-grid-left">
              <div className="flex flex-wrap flex-between">
                <div className="cart-count-info">
                  <span className="fw-7 fs-18">{totalItems}</span> Course in
                  Cart
                </div>
                <button
                  type="button"
                  className="cart-clear-btn flex fs-15 fw-6 text"
                  onClick={() => clearCart()}
                >
                  <MdClear className="text-pink" />
                  <span className="d-inline-block text-pink">Clear All</span>
                </button>
              </div>

              <div className="cart-items-list grid">
                {cartItems.map((cartItem) => (
                  <CartItemCard
                    key={cartItem.courseID}
                    cartItem={cartItem}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
            </div>
            {/* end of grid left */}
            {/* cart grid right */}
            <div className="cart-grid-right">
              <div className="cart-total">
                <span className="d-block fs-18 fw-6">Total:</span>
                <div className="cart-total-value fw-8">
                  ${totalAmount.toFixed(2)}
                </div>
                <button
                  type="button"
                  className="checkout-btn bg-purple text-white fw-6"
                >
                  Checkout
                </button>
              </div>
            </div>
            {/* end of cart grid right */}
          </div>
        </div>
      </CartWrapper>
    </>
  );
};

const NotFoundWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;
`;

const CartWrapper = styled.div`
  padding: 30px 0;
  .card-pg-title {
    padding: 20px 0 6px 0;
  }
  .cart-grid {
    row-gap: 40px;
    .cart-grid-left {
      margin-bottom: 30px;
    }

    .cart-clear-btn {
      span {
        margin-left: 6px;
      }
    }

    .cart-items-list {
      margin-top: 20px;
      row-gap: 12px;
    }
    .cart-total-value {
      font-size: 34px;
    }
    .checkout-btn {
      padding: 14px 28px;
      letter-spacing: 1px;
      margin-top: 12px;
      transition: var(--transition);

      &:hover {
        background-color: var(--clr-dark);
      }
    }
    .cart-total {
      padding-bottom: 50px;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 70% 30%;
      column-gap: 32px;
    }
  }
`;

//   return (
//     <CartWrapper>
//       <div className="container">
//         <CartPageTitle>
//           <h3>Shopping Cart</h3>
//         </CartPageTitle>
//         <CartGrid>
//           <CartGridLeft>
//             <div>
//               <CartCountInfo>
//                 <span>{totalItems}</span> Course in Cart
//               </CartCountInfo>
//               <CartClearButton onClick={() => clearCart()}>
//                 <MdClear />
//                 <span>Clear All</span>
//               </CartClearButton>
//             </div>
//             <CartItemsList>
//               {cartItems.map((cartItem) => (
//                 <CartItemCard
//                   key={cartItem.courseID}
//                   cartItem={cartItem}
//                   removeFromCart={removeFromCart}
//                 />
//               ))}
//             </CartItemsList>
//           </CartGridLeft>
//           <div>
//             <CartTotal>
//               <span>Total:</span>
//               <CartTotalValue>${totalAmount.toFixed(2)}</CartTotalValue>
//               <CheckoutButton>Checkout</CheckoutButton>
//             </CartTotal>
//           </div>
//         </CartGrid>
//       </div>
//     </CartWrapper>
//   );
// };

export default CartPage;
