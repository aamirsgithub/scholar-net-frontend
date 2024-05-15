import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText as MuiFormHelperText,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  PageContainer,
  FormContainer,
  StyledForm,
  StyledButton,
  StyledTextField,
  ImagePreview,
  StyledInputButton,
} from "./style";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import { FlexDiv } from "../common/Style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularLoader from "../Login/CircularLoader";
import LinearColor from "../Login/LinearColor";

const StyledFormHelperText = styled(MuiFormHelperText)`
  font-size: 5rem;
  color: #666;
  margin-top: 6px;
  font-style: italic;
`;

const categories = [
  "Python",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "Artificial Intelligence",
  "Cybersecurity",
  "Big Data",
  "Blockchain",
];

const UploadCourse = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("error");
  const [userData, setUserData] = useState({ displayName: "" });

  const [courseData, setCourseData] = useState({
    course_name: "",
    description: "",
    creator: " ",
    language: "",
    category: "",
    actual_price: "",
    discounted_price: "",
    what_you_will_learn: "",
    content: [
      {
        title: "",
        description: "",
        video: null,
        videoPreview: "",
        audio: null,
      },
    ],
  });

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("userData");
    if (userDataFromStorage) {
      const parsedUserData = JSON.parse(userDataFromStorage);
      setUserData(parsedUserData);
      setCourseData((prevState) => ({
        ...prevState,
        creator: parsedUserData.displayName,
      })); // Set creator from userData
    }
  }, []);

  const descriptionWordCount = courseData.description
    .trim()
    .split(/\s+/).length;
  const isDescriptionTooLong = descriptionWordCount > 25;

  useEffect(() => {
    if (selectedImage) {
      const objectUrl = URL.createObjectURL(selectedImage);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
    setPreviewUrl("");
  }, [selectedImage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "description" && value.trim().split(/\s+/).length > 25) {
      return;
    }
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleRemoveVideo = (index) => {
    const newContent = [...courseData.content];
    newContent[index].video = null;
    newContent[index].videoPreview = "";
    setCourseData((prevState) => ({ ...prevState, content: newContent }));
    setFeedbackMessage("");
  };

  const handleFocusOnFileInput = (index) => {
    let newContent = [...courseData.content];
    newContent[index].video = null;
    newContent[index].videoPreview = "";
    setCourseData({ ...courseData, content: newContent });
  };

  const handleContentChange = async (index, field, e) => {
    let newContent = [...courseData.content];
    if (field === "video") {
      const file = e.target.files[0];
      if (file) {
        setFeedbackMessage("");
        await profanityCheckFunction(file, index);
        if (newContent[index].video) {
          newContent[index].videoPreview = URL.createObjectURL(file);
          newContent[index].video = file;
        } else {
          newContent[index].videoPreview = "";
          newContent[index].video = null;
        }
      }
    } else {
      newContent[index][field] = e.target.value;
    }
    setCourseData({ ...courseData, content: newContent });
  };

  const profanityCheckFunction = async (file, index) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await fetch("http://localhost:5000/api/extract-audio", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const result = await response.json();
      if (!response.ok) throw new Error("Failed to extract audio");
      if (result.hasProfanity) {
        setFeedbackMessage(
          "Profanity detected! Please upload a different video."
        );
        setFeedbackType("error");
        toast.error("Profanity detected! Video Revoked.");
        courseData.content[index].video = null;
        courseData.content[index].videoPreview = "";
        setCourseData((prevState) => {
          const updatedContent = [...prevState.content];
          updatedContent[index].video = null;
          updatedContent[index].videoPreview = "";
          return { ...prevState, content: updatedContent };
        });
      } else {
        setFeedbackType("success");
        toast.success("Your video is clean and allowed for upload.");
        setFeedbackMessage("Your video is clean and allowed for upload.");
        const newContent = [...courseData.content];
        newContent[index].video = file;
        setCourseData((prevState) => ({ ...prevState, content: newContent }));
      }
    } catch (error) {
      toast.error("Failed to process the video.");
      setFeedbackMessage("Failed to process the video.");
      setFeedbackType("error");
    } finally {
      setIsLoading(false);
    }
  };

  const addContentField = () => {
    setCourseData((prevState) => ({
      ...prevState,
      content: [
        ...prevState.content,
        { title: "", description: "", video: null },
      ],
    }));
  };

  const removeContentField = (index) => {
    setCourseData((prevState) => {
      const newContent = [...prevState.content];
      newContent.splice(index, 1);
      return { ...prevState, content: newContent };
    });
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl("");
    setFeedbackMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isDescriptionTooLong) {
      setFeedbackMessage(
        "Description exceeds the word limit of 25 words. Please shorten it."
      );
      return;
    }

    if (!selectedImage) {
      setFeedbackMessage("Please upload a cover photo before submitting.");
      return;
    }

    const requiredFields = [
      "course_name",
      "description",
      "creator",
      "language",
      "category",
      "actual_price",
      "discounted_price",
      "what_you_will_learn",
    ];
    const isAnyFieldEmpty = requiredFields.some(
      (field) => !courseData[field] || courseData[field].trim() === ""
    );
    if (isAnyFieldEmpty) {
      setFeedbackMessage(
        "Please fill out all fields in the Course Information Section before submitting."
      );
      setFeedbackType("error");
      return;
    }

    const isContentIncomplete = courseData.content.some(
      (item) => !item.title || !item.description || !item.video
    );
    if (isContentIncomplete) {
      setFeedbackMessage(
        "Please complete all fields in Video Content Section before submitting."
      );
      setFeedbackType("error");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    Object.keys(courseData).forEach((key) => {
      if (key !== "content") {
        formData.append(key, courseData[key]);
      } else {
        courseData.content.forEach((contentItem, index) => {
          formData.append(`content[${index}][title]`, contentItem.title);
          formData.append(
            `content[${index}][description]`,
            contentItem.description
          );
          if (contentItem.video) {
            formData.append(
              `content[${index}][video]`,
              contentItem.video,
              contentItem.video.name
            );
          }
        });
      }
    });
    if (selectedImage) formData.append("image", selectedImage);
    try {
      const response = await fetch(
        "http://localhost:5000/api/upload-basic-course",
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );
      if (!response.ok) throw new Error("Network response was not ok");

      setCourseData({
        course_name: "",
        description: "",
        creator: "",
        language: "",
        category: "",
        actual_price: "",
        discounted_price: "",
        what_you_will_learn: "",
        content: [
          {
            title: "",
            description: "",
            video: null,
            videoPreview: "",
            audio: null,
          },
        ],
      });
      setSelectedImage(null);
      setPreviewUrl("");
      toast.success("Course uploaded successfully!");
      setFeedbackMessage(
        "Course uploaded successfully! You can submit another course."
      );
      setFeedbackType("success");
    } catch (error) {
      console.error("There was an error uploading the course:", error);
      toast.error("Failed to upload the course.");
      setFeedbackMessage("Failed to upload the course.");
      setFeedbackType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        pauseOnHover
      />
      <PageContainer style={{ marginTop: "30px" }}>
        <FormContainer>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Upload New Video Course
          </Typography>
          <StyledForm onSubmit={handleSubmit}>
            <Grid item xs={12} style={{ marginTop: "30px" }}>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                Course Cover Image
              </Typography>
              <FlexDiv
                style={{
                  gap: "1rem",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                {previewUrl && <ImagePreview src={previewUrl} alt="Preview" />}
                <FlexDiv
                  style={{
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    style={{ display: "none" }}
                    id="file-upload-button"
                  />
                  <label htmlFor="file-upload-button">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>

                  {previewUrl && (
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveImage}
                      style={{ cursor: "pointer" }}
                      startIcon={<CancelIcon />}
                    >
                      Remove
                    </Button>
                  )}
                </FlexDiv>
              </FlexDiv>
              {!selectedImage && (
                <Typography color="error">Required</Typography>
              )}
            </Grid>
            <FlexDiv
              style={{
                margin: "3rem 0rem",
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              -----------------------------Course Information
              Section------------------------------
            </FlexDiv>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category-select"
                    value={courseData.category}
                    label="Category"
                    onChange={handleChange}
                    name="category"
                  >
                    {categories.map((category, index) => (
                      <MenuItem key={index} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {Object.keys(courseData)
                .filter((key) => key !== "content" && key !== "category")
                .map((key) => (
                  <Grid item xs={12} sm={6} key={key}>
                    <StyledTextField
                      fullWidth
                      label={key
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                      name={key}
                      value={courseData[key]}
                      onChange={handleChange}
                      variant="outlined"
                      type={key.includes("price") ? "number" : "text"}
                      multiline={
                        key === "description" || key === "what_you_will_learn"
                      }
                      rows={
                        key === "description" || key === "what_you_will_learn"
                          ? 4
                          : 1
                      }
                    />
                    {key === "description" && (
                      <StyledFormHelperText>
                        Description must be short.
                        {`${descriptionWordCount}/25 words`}
                      </StyledFormHelperText>
                    )}

                    {key === "what_you_will_learn" && (
                      <StyledFormHelperText>
                        Write each Learning Point on new line. Press enter to
                        write on new line.
                      </StyledFormHelperText>
                    )}
                  </Grid>
                ))}
            </Grid>
            <FlexDiv
              style={{
                margin: "3rem 0rem",
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              -------------------------------Video Content
              Section-------------------------------
            </FlexDiv>
            <Grid container spacing={2}>
              {courseData.content.map((contentItem, index) => (
                <React.Fragment key={index}>
                  <FlexDiv
                    style={{
                      width: "100%",
                      border: "2px solid black",
                      flexDirection: "column",
                      marginBottom: "2rem",
                      padding: "1rem",
                    }}
                  >
                    <Typography variant="h4" color="textPrimary" gutterBottom>
                      LECTURE {index + 1}
                    </Typography>
                    <StyledFormHelperText>
                      Write the title of the video lecture and write content
                      description to explain about the lecture and content.
                    </StyledFormHelperText>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      style={{ width: "100%", padding: "1rem" }}
                    >
                      <StyledTextField
                        fullWidth
                        label="Content Title"
                        value={contentItem.title}
                        onChange={(e) => handleContentChange(index, "title", e)}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={6}
                      style={{ width: "100%", padding: "1rem" }}
                    >
                      <StyledTextField
                        fullWidth
                        label="Content Description"
                        value={contentItem.description}
                        onChange={(e) =>
                          handleContentChange(index, "description", e)
                        }
                        variant="outlined"
                        multiline
                        rows={4}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FlexDiv
                        style={{
                          justifyContent: "space-between",
                          gap: "4rem",
                          width: "100%",
                        }}
                      >
                        {!contentItem.videoPreview && (
                          <div>
                            <input
                              onFocus={() => handleFocusOnFileInput(index)}
                              onChange={(e) =>
                                handleContentChange(index, "video", e)
                              }
                              type="file"
                              accept="video/*"
                              style={{ display: "none" }}
                              id={`video-upload-button-${index}`}
                              disabled={isLoading}
                            />
                            <label htmlFor={`video-upload-button-${index}`}>
                              <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                disabled={isLoading}
                              >
                                Upload Video
                              </Button>
                            </label>
                          </div>
                        )}
                        <FlexDiv style={{ alignSelf: "flex-end" }}>
                          {contentItem.videoPreview && (
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => handleRemoveVideo(index)}
                              style={{ cursor: "pointer" }}
                              startIcon={<CancelIcon />}
                            >
                              Remove Video
                            </Button>
                          )}
                        </FlexDiv>
                      </FlexDiv>
                      {!contentItem.video && (
                        <Typography color="error">Required</Typography>
                      )}
                      {contentItem.videoPreview && (
                        <video width="100%" controls>
                          <source
                            src={contentItem.videoPreview}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </Grid>
                    <FlexDiv
                      style={{ marginLeft: "1rem", alignSelf: "flex-end" }}
                    >
                      <Grid item xs={12}>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => removeContentField(index)}
                          startIcon={<CancelIcon />}
                          disabled={isLoading}
                        >
                          Remove Section
                        </Button>
                      </Grid>
                    </FlexDiv>
                  </FlexDiv>
                </React.Fragment>
              ))}
              <Grid item xs={12}>
                <Button
                  color="success"
                  variant="outlined"
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={addContentField}
                  disabled={isLoading}
                >
                  Add New Section
                </Button>
              </Grid>
            </Grid>
            <FlexDiv style={{ gap: "1rem" }}>
              {isLoading && (
                <Typography style={{ fontSize: "2rem" }}>
                  Ai Profanity Checking in Progress...
                </Typography>
              )}
              {isLoading && (
                <Typography style={{ fontSize: "1rem" }}>
                  Our Ai Model will respond soon.
                </Typography>
              )}

              {isLoading && <CircularLoader size={30} color="black" />}
            </FlexDiv>
            {isLoading && <LinearColor />}

            {feedbackMessage && (
              <Typography
                style={{
                  color: feedbackType === "success" ? "green" : "red",
                  margin: "20px 0",
                  fontSize: "2rem",
                }}
              >
                {feedbackMessage}
              </Typography>
            )}
            <StyledButton
              type="submit"
              variant="contained"
              disabled={isDescriptionTooLong || isLoading}
            >
              Submit
            </StyledButton>
          </StyledForm>
        </FormContainer>
      </PageContainer>
    </>
  );
};

export default UploadCourse;
