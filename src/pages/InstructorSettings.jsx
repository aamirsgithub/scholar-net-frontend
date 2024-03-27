import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCartArrowDown,
  faChartPie,
  faChevronDown,
  faClipboard,
  faCommentDots,
  faFileAlt,
  faPlus,
  faRocket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Dropdown } from "@themesberg/react-bootstrap";
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import GeneralInfoForm from "../components/Forms";

import Profile3 from "../assets/images/profile-picture-3.jpg";
import Navbar from "../components/Navbar/Navbar";

const TeacherSettings = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    courseCategory: "",
    language: "",
    image: "",
  });
  // const [databaseImg, setDatabaseImg] = useState(null);

  useEffect(() => {
    // Fetch profile data from backend on component mount
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/instructor/profile`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
          // src = {`http://localhost:5000/${data.image.replace(/\\/g, "/")}`}
          // console.log("Profile data img from backend:", src);
          // setDatabaseImg(data);
        }
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: "10px 70px 10px 70px" }}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4 px-3">
          {/* <Dropdown>
            <Dropdown.Toggle
              as={Button}
              variant="secondary"
              className="text-dark me-2"
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              <span>New</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Instructor
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faCommentDots} className="me-2" />{" "}
                Student
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon icon={faRocket} className="text-danger me-2" />{" "}
                Subscription Plan
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

          {/* <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="primary">
              <FontAwesomeIcon icon={faClipboard} className="me-2" /> Reports
              <span className="icon icon-small ms-1">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-1">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Courses
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faStore} className="me-2" /> Students
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faCartArrowDown} className="me-2" />{" "}
                Subscriptions
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon
                  icon={faRocket}
                  className="text-success me-2"
                />{" "}
                All Reports
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
        </div>

        <Row>
          <Col xs={12} xl={4} style={{ marginTop: 25 }}>
            <Row>
              {/* <Col xs={12}>
                <ProfileCardWidget
                  // photo={profileData.image}
                  {...(databaseImg === null
                    ? { photo: profileData.image }
                    : {})}
                />
              </Col> */}
              <Col xs={12}>
                <ChoosePhotoWidget
                  title="Select profile photo"
                  setProfileImage={(file) =>
                    setProfileData({ ...profileData, image: file })
                  }
                />
              </Col>
            </Row>
          </Col>

          <Col xs={12} xl={8}>
            <GeneralInfoForm
              profileData={profileData}
              setProfileData={setProfileData}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TeacherSettings;
