import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faEnvelope,
  faPhone,
  faHome,
  faBirthdayCake,
  faTransgender,
  faGlobeAmericas,
  faLanguage,
  faGraduationCap,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Image,
  Button,
  ListGroup,
} from "@themesberg/react-bootstrap";
import Profile1 from "../assets/images/profile-picture-1.jpg";
import ProfileCover from "../assets/images/profile-cover.jpg";
import teamMembers from "../assets/data/teamMembers";
import StartMeeting from "./Meeting/StartMeeting";
import { Navigate } from "react-router-dom";
import CircularLoader from "./Login/CircularLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const InstructorProfileWidget = ({ profileData, InstructorId }) => {
  // const [courseId, setCourseId] = useState("65fc598b1ce0cb419f503f98");
  const [meetingCreated, setMeetingCreated] = useState("");
  const [meetingData, setMeetingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    state,
    courseCategory,
    language,
    image,
  } = profileData;

  const profileImage = image
    ? `http://localhost:5000/${image.replace(/\\/g, "/")}`
    : Profile1;

  // console.log("instructor profile data", profileData)
  // console.log("meeting join url", meetingStartUrl)

  //fetching meeting details from backend:
  // const fetchMeetingDetails = async () => {
  //   const response = await fetch(
  //     "http://localhost:5000/api/zoom/meeting-details",
  //     {
  //       method: "POST",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ instructorId: InstructorId }),
  //     }
  //   );

  //   const data = await response.json();
  //   // console.log("Meeting data:", data);
  //   if (response.ok) {
  //     toast.success("Meeting details fetched successfully!");
  //     setMeetingData({
  //       startUrl: data.startUrl,
  //       joinUrl: data.joinUrl,
  //       password: data.password,
  //     });
  //   } else {
  //     toast.error(data.message || "Failed to fetch meeting details.");
  //   }
  // };

  const fetchMeetingDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/zoom/meeting-details",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ instructorId: InstructorId }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMeetingData({
          startUrl: data.startUrl,
          joinUrl: data.joinUrl,
          password: data.password,
        });
        toast.success("Meeting details fetched successfully!");
      } else {
        toast.error(data.message || "Failed to fetch meeting details.");
      }
    } catch (error) {
      toast.error("Error fetching meeting details.");
    } finally {
      setLoading(false);
    }
  };

  const handleStartMeeting = () => {
    if (meetingData?.startUrl) {
      window.open(meetingData.startUrl, "_blank").focus();
    } else {
      alert("The meeting URL is not available.");
    }
  };

  const CreateMeeting = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/zoom/start-meeting", {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ InstructorId }),
      });

      const data = await response.json();
      if (response.ok) {
        setMeetingCreated(data);
        toast.success("Meeting created successfully!");
      } else {
        toast.error("Failed to start the meeting.");
      }
    } catch (error) {
      toast.error("Error starting the meeting.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Card border="light" className="text-center p-0 mb-4">
        <div
          style={{ backgroundImage: `url(${ProfileCover})` }}
          className="profile-cover rounded-top"
        />
        <Card.Body className="pb-5">
          <Card.Img
            src={profileImage}
            alt="Profile Image"
            className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
          />
          <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
          <Card.Subtitle className="fw-normal">{email}</Card.Subtitle>
          <Card.Text className="text-gray mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            {email}
            <br />
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            {phone}
            <br />
            <FontAwesomeIcon icon={faHome} className="me-2" />
            {`${city}, ${state}`}
            <br />
            <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
            {courseCategory}
            <br />
            <FontAwesomeIcon icon={faLanguage} className="me-2" />
            {language}
          </Card.Text>

          <Button
            variant="secondary"
            size="sm"
            className="me-2"
            onClick={CreateMeeting}
            disabled={loading}
          >
            {/* {loading ? 'Creating Meeting...' : 'Meeting Created'} */}
            {loading ? (
              <CircularLoader size={12} disableShrink />
            ) : (
              <>Create Meeting</>
            )}
          </Button>

          {meetingCreated && (
            <Button
              onClick={fetchMeetingDetails}
              variant="primary"
              size="sm"
              className="me-2"
            >
              <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Fetch
              Meeting Details
            </Button>
          )}

          {meetingData && (
            <Button
              onClick={handleStartMeeting}
              variant="secondary"
              size="sm"
              className="me-2"
            >
              Join Meeting Now
            </Button>
          )}
        </Card.Body>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <div style={{ marginBottom: "10px", width: "650px" }}>
            <label
              htmlFor="startUrl"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Start URL:
            </label>
            <input
              type="text"
              id="startUrl"
              value={meetingData?.startUrl || ""}
              readOnly
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#f9f9f9",
              }}
            />
          </div> */}
          <div style={{ marginBottom: "10px", width: "650px" }}>
            <label
              htmlFor="joinUrl"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Join URL for Students:
            </label>
            <input
              type="text"
              id="joinUrl"
              value={meetingData?.joinUrl || ""}
              readOnly
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#f9f9f9",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px", width: "650px" }}>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Password:
            </label>
            <input
              type="text"
              id="password"
              value={meetingData?.password || ""}
              readOnly
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#f9f9f9",
              }}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export const StudentProfileWidget = ({ profileData, InstructorId }) => {
  const [meetingData, setMeetingData] = useState(null);
  const [fetching, setFetching] = useState(false);

  const { firstName, lastName, email, phone, city, state, language, image } =
    profileData;
  const profileImage = image
    ? `http://localhost:5000/${image.replace(/\\/g, "/")}`
    : Profile1;

  const fetchMeetingDetails = async () => {
    setFetching(true);
    const loadingToastId = toast.info("Loading meeting details...", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/zoom/meeting-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ instructorId: "6623769a18585ecc625e9dda" }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.dismiss(loadingToastId);
        toast.success("Meeting details fetched successfully!");
        setMeetingData(data);
      } else {
        toast.dismiss(loadingToastId);
        toast.error(data.message || "Failed to fetch meeting details");
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error("Error fetching meeting details");
      console.error("Error fetching meeting details:", error);
    } finally {
      setFetching(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Card border="light" className="text-center p-0 mb-4">
        <div
          style={{ backgroundImage: `url(${ProfileCover})` }}
          className="profile-cover rounded-top"
        />
        <Card.Body className="pb-5">
          <Card.Img
            src={profileImage}
            alt="Profile Image"
            className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
          />
          <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
          <Card.Subtitle className="fw-normal">{email}</Card.Subtitle>
          <Card.Text className="text-gray mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" /> {email}
            <br />
            <FontAwesomeIcon icon={faPhone} className="me-2" /> {phone}
            <br />
            <FontAwesomeIcon icon={faHome} className="me-2" />{" "}
            {`${city}, ${state}`}
            <br />
            <FontAwesomeIcon icon={faLanguage} className="me-2" /> {language}
          </Card.Text>
          {/* <Button
            variant="primary"
            onClick={fetchMeetingDetails}
            disabled={loading}
          >
            {loading ? "Loading..." : "Fetch Meeting Details"}
          </Button>

          {meetingData && (
            <div style={{ marginTop: "20px" }}>
              <div>
                <strong>Join URL:</strong>{" "}
                <a
                  href={meetingData.joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {meetingData.joinUrl}
                </a>
              </div>
              <div>
                <strong>Password:</strong> {meetingData.password}
              </div>
            </div>
          )} */}

          <Button
            variant="primary"
            onClick={fetchMeetingDetails}
            disabled={fetching}
          >
            Fetch Meeting Details
          </Button>

          {meetingData && (
            <div style={{ marginTop: "20px" }}>
              <Button
                variant="success"
                href={meetingData.joinUrl}
                target="_blank"
              >
                Join Meeting
              </Button>
              <div>
                <strong>Password:</strong> {meetingData.password}
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export const ProfileCardWidget = ({ photo = null }) => {
  // console.log("photo:", photo)
  // const imageSrc = photo instanceof File ? URL.createObjectURL(photo) : photo;
  // console.log("imageSrc:", imageSrc)

  return (
    <Card border="light" className="text-center p-0 mb-4">
      <div
        style={{ backgroundImage: `url(${ProfileCover})` }}
        className="profile-cover rounded-top"
      />
      <Card.Body className="pb-5">
        {photo ? (
          <Card.Img
            src={`http://localhost:5000/${photo.replace(/\\/g, "/")}`}
            alt="profile-image"
            className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
          />
        ) : (
          <Card.Img
            src={Profile1}
            alt="Neil Portrait"
            className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
          />
        )}
        {/* <Card.Img
          src={Profile1}
          alt="Neil Portrait"
          className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
        />

        <Card.Img
          src={`http://localhost:5000/${photo.replace(/\\/g, "/")}`}
          alt="profile-image"
          className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
        /> */}
        <Card.Title>Neil Sims</Card.Title>
        <Card.Subtitle className="fw-normal">
          Senior Software Engineer
        </Card.Subtitle>
        <Card.Text className="text-gray mb-4">New York, USA</Card.Text>

        <Button variant="primary" size="sm" className="me-2">
          <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Connect
        </Button>
        <Button variant="secondary" size="sm">
          Send Message
        </Button>
      </Card.Body>
    </Card>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo, setProfileImage } = props;

  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);
      const fileURL = URL.createObjectURL(file);
      setImageUrl(fileURL);
    }
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">{title}</h5>
        <div className="d-xl-flex align-items-center">
          <div className="user-avatar xl-avatar">
            {imageUrl && <Image fluid rounded src={imageUrl} />}
          </div>
          <div className="file-field">
            <div className="d-flex justify-content-xl-center ms-xl-3">
              <div className="d-flex">
                <span className="icon icon-md">
                  <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                </span>

                <input type="file" name="image" onChange={handleFileChange} />
                <div className="d-md-block text-start">
                  <div className="fw-normal text-dark mb-1">Choose Image</div>
                  <div className="text-gray small">
                    JPG, GIF or PNG. Max size of 800K
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const TeamMembersWidget = () => {
  const TeamMember = (props) => {
    const { name, statusKey, image, icon, btnText } = props;
    const status = {
      online: { color: "success", label: "Online" },
      inMeeting: { color: "warning", label: "In a meeting" },
      offline: { color: "danger", label: "Offline" },
    };

    const statusColor = status[statusKey] ? status[statusKey].color : "danger",
      statusLabel = status[statusKey] ? status[statusKey].label : "Offline";

    return (
      <ListGroup.Item className="px-0">
        <Row className="align-items-center">
          <Col className="col-auto">
            <a href="#top" className="user-avatar">
              <Image src={image} className="rounded-circle" />
            </a>
          </Col>
          <Col className="ms--2">
            <h4 className="h6 mb-0">
              <a href="#!">{name}</a>
            </h4>
            <span className={`text-${statusColor}`}>● </span>
            <small>{statusLabel}</small>
          </Col>
          <Col className="col-auto">
            <Button variant="tertiary" size="sm">
              <FontAwesomeIcon icon={icon} className="me-1" /> {btnText}
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between">
        <h5 className="mb-0">Team members</h5>
        <Button variant="secondary" size="sm">
          See all
        </Button>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush list my--3">
          {teamMembers.map((tm) => (
            <TeamMember key={`team-member-${tm.id}`} {...tm} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
