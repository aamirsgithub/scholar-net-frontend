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
} from "./style";
import SearchBar from "../../components/common/SearchBar";
import Logo from "../../assets/images/logo-scholarnet0.png";
import ProfileImgDummy from "../../assets/images/profileavatar.png";
import { FlexDiv } from "../common/Style";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authentication/Auth";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [userData, setUserData] = useState(null);

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
        <Link href="/categories">Categories</Link>
        <SearchBar />
      </FlexDiv>

      <FlexDiv>
        {userData && userData.role === "Instructor" && (
          <Link href="/instructor">Instructor</Link>
        )}
        {userData && userData.role === "Student" && (
          <Link href="/student">Student</Link>
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

        <Link>
          <ShoppingCartCheckoutRoundedIcon
            style={{ fontSize: "22px", margin: "10px -15px 0px 0px" }}
          />
        </Link>
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
                <DropdownLink href="/profile">My Profile</DropdownLink>
                <DropdownLink href="/my-learnings">My Learnings</DropdownLink>
                <DropdownLink href="/my-cart">My Cart</DropdownLink>
              </DropdownSection>
              <DropdownSection>
                {" "}
                <DropdownLink href="/dashboard">
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
                  <DropdownLink href="/manage-courses">
                    Manage Courses
                  </DropdownLink>
                )}
                <DropdownLink href="/Notifications">Notifications</DropdownLink>
                <DropdownSection>
                  {" "}
                  <DropdownLink href="/logout">Logout</DropdownLink>
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
