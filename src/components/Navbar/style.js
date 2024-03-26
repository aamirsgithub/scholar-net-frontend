import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
 
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
  position: relative;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.1);
    outline: none;
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
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
