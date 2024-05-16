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
import { Typography } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
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

    return () =>
      window.removeEventListener("cartUpdated", updateCartItemsCount);
  }, []);

  const handleCartClick = () => {
    navigate("/cart");
  };

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("userData");
    const profilePicture = localStorage.getItem("profilePicture");
    if (userDataFromStorage && profilePicture) {
      setUserData(JSON.parse(userDataFromStorage));
      setProfilePicture(profilePicture);
    }
  }, []);

  return (
    <NavbarContainer>
      <FlexDiv style={{ justifyContent: "flex-start" }}>
        <LogoImg src={Logo} alt="App Logo" style={{ marginRight: "10px" }} />
        <Link href="/">Home</Link>
        {/* <Link href="#categories" 
        onClick={handleCategoriesClick}
        >
          Categories
        </Link> */}
        <SearchBar />
      </FlexDiv>

      <FlexDiv>
        {userData && userData.role === "Instructor" && (
          <FlexDiv style={{ whiteSpace: "nowrap" }}>
            <Link href="/instructor-profile">
              {userData.displayName} (Instructor)
            </Link>
          </FlexDiv>
        )}
        {userData && userData.role === "Student" && (
          <FlexDiv style={{ whiteSpace: "nowrap" }}>
            <Link href="/student-profile">
              {userData.displayName} (Student)
            </Link>
          </FlexDiv>
        )}
        {userData && userData.role === "Admin" && (
          <FlexDiv style={{ whiteSpace: "nowrap" }}>
            <Link href="/student-profile">{userData.displayName} (Admin)</Link>
          </FlexDiv>
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
          <ProfileImage
            src={profilePicture || ProfileImgDummy}
            alt="Profile Avatar"
          />
          {userData && (
            <DropdownMenu>
              <DropdownSection>
                <FlexDiv style={{ padding: " 0.5rem 0rem 1rem 0rem" }}>
                  <Typography style={{ color: "orange" }}>
                    {userData.email}
                  </Typography>
                </FlexDiv>
              </DropdownSection>
              <DropdownSection>
                <DropdownLink onClick={handleProfile}>Profile</DropdownLink>
                {/* <DropdownLink href="">My Learnings</DropdownLink> */}

                {userData.role === "Instructor" && (
                  <DropdownLink onClick={() => navigate("/instructor-courses")}>
                    My Courses
                  </DropdownLink>
                )}
                {userData.role === "Student" && (
                  <DropdownLink onClick={() => navigate("/my-courses")}>
                    My Courses
                  </DropdownLink>
                )}
                {userData.role === "Student" && (
                  <DropdownLink onClick={() => navigate("/cart")}>
                    Got to Cart
                  </DropdownLink>
                )}
              </DropdownSection>
              <DropdownSection>
                {userData.role === "Instructor" && (
                  <DropdownLink href="/upload-course">
                    Create Courses
                  </DropdownLink>
                )}
                {userData.role === "Admin" && (
                  <DropdownLink href="">Manage Courses</DropdownLink>
                )}
                {/* <DropdownLink href="">Notifications</DropdownLink> */}
                <DropdownSection>
                  <DropdownLink onClick={handleSettings}>Settings</DropdownLink>
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
