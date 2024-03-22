import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;
`;

export const CartWrapper = styled.div`
  padding: 30px 0;
`;

export const CartPageTitle = styled.div`
  padding: 20px 0 6px 0;
`;

export const CartGrid = styled.div`
  display: grid;
  row-gap: 40px;

  @media screen and (min-width: 992px) {
    grid-template-columns: 70% 30%;
    column-gap: 32px;
  }
`;

export const CartGridLeft = styled.div`
  margin-bottom: 30px;
`;

export const CartCountInfo = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const CartClearButton = styled.button`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const CartItemsList = styled.div`
  margin-top: 20px;
`;

export const CartTotal = styled.div`
  padding-bottom: 50px;
`;

export const CartTotalValue = styled.div`
  font-size: 34px;
`;

export const CheckoutButton = styled.button`
  padding: 14px 28px;
  letter-spacing: 1px;
  margin-top: 12px;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: var(--clr-dark);
  }
`;

export const CartItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 110px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;

  .cart-item-img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cart-item-category {
    padding: 0px 10px;
    border-radius: 6px;
    background-color: var(--clr-orange);
    font-size: 12px;
    display: inline-block;
    color: var(--clr-white);
    font-weight: 700;
    text-transform: capitalize;
  }
  .remove-btn {
    margin-top: 16px;
    font-size: 13px;
    font-weight: 600;
    color: var(--clr-dark);
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    &:hover {
      color: var(--clr-purple);
    }
    span {
      margin-left: 5px;
    }
  }
`;

export const NoItemsInCart = styled.div`
  padding: 20px;
  color: red;
  font-size: 20px;
`;
