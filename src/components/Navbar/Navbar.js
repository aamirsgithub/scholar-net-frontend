import React, { useState, useEffect, useRef } from "react";
import {
  NavbarContainer,
  LogoAndCategories,
  Link,
  ProfileAvatar,
  ProfileImage,
  DropdownMenu,
  DropdownLink,
  LogoImg,
  DropdownSection,
  CartItemBatch,
  CartBtn,
} from "./style";
import SearchBar from "../../components/common/SearchBar";
import Logo from "../../assets/images/logo-scholarnet0.png";
import ProfileImgDummy from "../../assets/images/profileavatar.png";
import { FlexDiv } from "../common/Style";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authentication/Auth";

const Navbar = ({ totalItems }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [totalCartItems, setTotalCartItems] = useState(0);

  const user = JSON.parse(localStorage.getItem("userData"));
  const isInstructor = user?.role === "Instructor";
  const isAdmin = user?.role === "Admin";
  const isStudent = user?.role === "Student";


  const handleLogout = () => {
    localStorage.removeItem("cartItems");
    logout();
    navigate("/login");
  };

  const handleProfile = () => {
    if (isInstructor) {
      navigate("/instructor-profile");
    }

    if (isStudent) {
      navigate("/student-profile");
    } else if (isAdmin) {
      navigate("/admin-profile");
    } else if (isInstructor) {
      navigate("/instructor-profile");
    }
  };

  const handleSettings = () => {
    if (isStudent) {
      navigate("/student-settings");
    } else if (isAdmin) {
      navigate("/admin-settings");
    } else if (isInstructor) {
      navigate("/instructor-settings");
    }
  };

  useEffect(() => {
    const updateCartItemsCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setTotalCartItems(cartItems.length);
    };

    updateCartItemsCount();
    window.addEventListener("cartUpdated", updateCartItemsCount);
    const userDataFromStorage = localStorage.getItem("userData");
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }

    // Cleanup: remove event listener on component unmount
    return () =>
      window.removeEventListener("cartUpdated", updateCartItemsCount);
  }, []);

  const handleCartClick = () => {
    navigate("/cart");
  };

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("userData");
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  return (
    <NavbarContainer>
      <FlexDiv style={{ justifyContent: "flex-start" }}>
        <LogoImg src={Logo} alt="App Logo" style={{ marginRight: "10px" }} />
        <Link href="">Categories</Link>
        <SearchBar />
      </FlexDiv>

      <FlexDiv>
        {userData && userData.role === "Instructor" && (
          <Link href="/instructor">Instructor</Link>
        )}
        {userData && userData.role === "Student" && (
          <Link href="/student-profile">Student</Link>
        )}
        {userData && userData.role === "Admin" && (
          <Link href="/admin">Admin</Link>
        )}

        {!userData && (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </>
        )}

        {!isInstructor && (
          <CartBtn onClick={handleCartClick}>
            <ShoppingCartCheckoutRoundedIcon style={{ fontSize: "22px" }} />
            <CartItemBatch>{totalCartItems}</CartItemBatch>
          </CartBtn>
        )}

        <Link>
          <FavoriteBorderRoundedIcon
            style={{ fontSize: "22px", marginTop: "10px" }}
          />
        </Link>

        <ProfileAvatar>
          <ProfileImage src={ProfileImgDummy} alt="Profile Avatar" />
          {userData && (
            <DropdownMenu>
              <DropdownSection>
                <div>{userData.displayName}</div>
                <div>{userData.email}</div>{" "}
              </DropdownSection>
              <DropdownSection>
                <DropdownLink onClick={handleProfile}>Profile</DropdownLink>
                <DropdownLink href="">My Learnings</DropdownLink>
                <DropdownLink href="">Favourite Courses</DropdownLink>
              </DropdownSection>
              <DropdownSection>
                <DropdownLink href="">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                    }}
                  >
                    <div>{userData.role}'s </div>
                    <div> Dashboard</div>
                  </div>
                </DropdownLink>

                {userData.role === "Instructor" && (
                  <DropdownLink href="/upload-course">Courses</DropdownLink>
                )}
                {userData.role === "Admin" && (
                  <DropdownLink href="">Manage Courses</DropdownLink>
                )}
                <DropdownLink href="">Notifications</DropdownLink>
                <DropdownSection>
                  <DropdownLink onClick={handleSettings}>Go to Settings</DropdownLink>
                  <DropdownLink onClick={handleLogout}>Logout</DropdownLink>
                </DropdownSection>
              </DropdownSection>
            </DropdownMenu>
          )}
        </ProfileAvatar>
      </FlexDiv>
    </NavbarContainer>
  );
};

export default Navbar;
