import React, { useState, useEffect } from "react";
import Datetime from "react-datetime";
// import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Container,
  InputGroup,
  Button,
} from "@themesberg/react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GeneralInfoForm = ({ profileData, setProfileData }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const isInstructor = user?.role === "Instructor";
  const isAdmin = user?.role === "Admin";
  const isStudent = user?.role === "Student";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handler for form submission
  const handleInstructorSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append profile data fields to formData
    for (const key in profileData) {
      formData.append(key, profileData[key]);
    }

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/instructor/profile`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
          // }).then(response => {
          //   if (response.ok) {
          //     return response.json();
          //   }
          //   throw new Error('Network response was not ok.');
          // }).then(data => {
          //   console.log(data); // Handle success
          // }).catch(error => {
          //   console.error('There was a problem with your fetch operation:', error);
          // });
        }
      );

      if (response.ok) {
        toast.success("Instructor Profile updated successfully");
      } else {
        toast.error("Failed to update instructor profile");
      }
    } catch (error) {
      console.error("Failed to submit instructor profile data:", error);
      toast.error("Error during form submission");
    }
  };

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append profile data fields to formData
    for (const key in profileData) {
      formData.append(key, profileData[key]);
    }

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/student/profile`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      if (response.ok) {
        toast.success("Student Profile updated successfully");
      } else {
        toast.error("Failed to update student profile");
      }
    } catch (error) {
      console.error("Failed to submit student profile data:", error);
      toast.error("Failed to submit profile data");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "800px" }}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Row>
        <Col>
          <h2 className="mb-3">General Information</h2>
          <Form
            onSubmit={isStudent ? handleStudentSubmit : handleInstructorSubmit}
          >
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={profileData.firstName || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={profileData.lastName || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Birthday</Form.Label>
                  <Datetime
                    timeFormat={false}
                    // Ensure value is a moment object or similar if using string dates in state
                    value={
                      profileData.birthday ? moment(profileData.birthday) : null
                    }
                    onChange={(date) => {
                      // Convert date to a string or your preferred format
                      const dateString = date.format("YYYY-MM-DD");
                      setProfileData((prevState) => ({
                        ...prevState,
                        birthday: dateString,
                      }));
                    }}
                    renderInput={(props, openCalendar) => {
                      return (
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                          </InputGroup.Text>
                          {/* Use props.value directly here, but don't try to control it with state */}
                          <Form.Control
                            type="text"
                            onFocus={props.onFocus} // This opens the calendar
                            value={props.value} // Value is managed by Datetime, not directly via state
                          />
                        </InputGroup>
                      );
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    name="gender"
                    value={profileData.gender || ""}
                    onChange={handleInputChange}
                  >
                    <option>Choose...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={profileData.email || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={profileData.phone || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* 
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                name="address"
                value={profileData.address || ""}
                onChange={handleInputChange}
              />
            </Form.Group> */}

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    placeholder="City"
                    name="city"
                    value={profileData.city || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    name="state"
                    value={profileData.state || ""}
                    onChange={handleInputChange}
                  >
                    <option>Select State...</option>
                    <option value="islamabad">Islamabad</option>
                    <option value="punjab">Punjab</option>
                    <option value="kpk">KPK</option>
                    <option value="balochistan">Balochistan</option>
                    <option value="sindh">Sindh</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              {/* <Col md={2}>
                <Form.Group className="mb-3">
                  <Form.Label>ZIP</Form.Label>
                  <Form.Control
                    placeholder="ZIP Code"
                    name="zip"
                    value={profileData.zip || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col> */}
            </Row>

            {!isStudent && (
              <Form.Group className="mb-3">
                <Form.Label>Course Category</Form.Label>
                <Form.Select
                  name="courseCategory"
                  value={profileData.courseCategory || ""}
                  onChange={handleInputChange}
                >
                  <option>Select category...</option>
                  <option value="data-science">Data Science</option>
                  <option value="python">Python</option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="deep-learning">Deep Learning</option>
                  <option value="data-structure">Data Structure</option>
                  <option value="android">Android</option>
                  <option value="ios">iOS</option>
                </Form.Select>
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Select
                name="language"
                value={profileData.language || ""}
                onChange={handleInputChange}
              >
                <option>Select language...</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="russian">Russian</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default GeneralInfoForm;
