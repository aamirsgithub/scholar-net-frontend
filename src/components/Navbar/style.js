import styled from "styled-components";

// export const NavbarContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   padding: 10px 20px;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
// `;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed; /* Make navbar fixed */
  top: 20px; /* Add top margin to show some background */
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure it's above other content */
  margin: 0 auto; /* Center it on the page */
  width: 100%; /* Take full width */
  box-sizing: border-box; /* Include padding in width calculation */
  max-width: 900px; /* Maximum width of navbar */
  border-radius: 10px;
`;

export const LogoAndCategories = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 14%;
`;

export const Link = styled.a`
  margin: 0 15px;
  color: black;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

export const ProfileAvatar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  right: -3%;

  &:hover,
  &:focus {
    transform: scale(1.1);
    outline: none;
  }
`;

export const ProfileImage = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  cursor: pointer;
`;

export const DropdownSection = styled.div`
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-top: 1px solid #ddd;
    border-bottom: none;
  }
`;

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 45px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  z-index: 1000;
  width: 190px;

  ${ProfileAvatar}:hover &, ${ProfileAvatar}:focus-within & {
    display: block;
  }

  span {
    display: block;
    padding: 10px 0;
  }
`;

export const DropdownLink = styled.a`
  display: block;
  color: black;
  padding: 5px 10px;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

export const CartItemBatch = styled.div`
  background-color: var(--clr-orange);
  position: absolute;
  right: -11px;
  top: -12px;
  font-size: 12px;
  font-weight: 700;
  display: block;
  width: 23px;
  height: 23px;
  color: var(--clr-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
`;

export const CartBtn = styled.div`
  position: relative;
  top: 6px;
  cursor: pointer;
  &:hover {
    color: blue;
    // transform: scale(1.1);
    & ${CartItemBatch} {
      transform: scale(0.5);
    }
  }
  // transition: transform 0.3s ease;
`;
