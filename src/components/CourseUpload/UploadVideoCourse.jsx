import React, { useState, useEffect, useRef } from "react";
import { Typography, Grid, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  PageContainer,
  FormContainer,
  StyledForm,
  StyledButton,
  StyledTextField,
  ImagePreview,
} from "./style";
import Navbar from "../Navbar/Navbar";

const UploadCourse = () => {
  const [courseData, setCourseData] = useState({
    category: "",
    course_name: "",
    description: "",
    creator: "",
    language: "",
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const videoFileInputRef = useRef(null);

  // useEffect(() => {
  //   console.log("extractedAudio:", extractedAudio);
  // }, [extractedAudio]);

  const storedUserData = localStorage.getItem("userData");
  let userData = {};
  if (storedUserData) {
    userData = JSON.parse(storedUserData);
  }

  useEffect(() => {
    if (!selectedImage) {
      setPreviewUrl("");
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImage);
    setPreviewUrl(objectUrl);

    // Cleanup
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
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

      if (!response.ok) throw new Error("Failed to extract audio");
      const result = await response.json();
      // setExtractedAudio(result.audioPath);
      if (result.hasProfanity) {
        setFeedbackMessage(
          "Profanity detected! Please upload a different video."
        );
        setCourseData((prevState) => {
          const updatedContent = [...prevState.content];
          updatedContent[index].video = null;
          updatedContent[index].videoPreview = "";
          return { ...prevState, content: updatedContent };
        });

        //   if (videoFileInputRef.current) {
        //     videoFileInputRef.current.value = "";
        // }
      } else {
        setFeedbackMessage("Your video is clean and allowed for upload.");
      }
    } catch (error) {
      console.error("Audio extraction error:", error);
      setFeedbackMessage("Failed to process the video.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContentChange = async (index, field, value) => {
    const newContent = [...courseData.content];
    if (field === "video") {
      const file = value.target.files[0];
      newContent[index][field] = file;
      newContent[index].videoPreview = URL.createObjectURL(file);
      await profanityCheckFunction(file, index);
    } else {
      newContent[index][field] = value;
    }
    setCourseData((prevState) => ({ ...prevState, content: newContent }));
  };

  const addContentField = () => {
    setFeedbackMessage("");
    setCourseData((prevState) => ({
      ...prevState,
      content: [
        ...prevState.content,
        { title: "", description: "", video: null },
      ],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(courseData).forEach((key) => {
      if (key !== "content") {
        formData.append(key, courseData[key]);
      } else {
        courseData[key].forEach((contentItem, index) => {
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

    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/upload-basic-course`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("There was an error uploading the course:", error);
    }
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <FormContainer>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Upload New Course "Basic Content"
          </Typography>
          <StyledForm onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Course Cover Image
              </Typography>
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                style={{ marginBottom: "16px" }}
              />
              {previewUrl && <ImagePreview src={previewUrl} alt="Preview" />}
            </Grid>
            <Grid container spacing={2}>
              {Object.keys(courseData)
                .filter((key) => key !== "content")
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
                  </Grid>
                ))}
              {/* CONTENT FIELD */}
            </Grid>
            <Grid container spacing={2}>
              {courseData.content.map((contentItem, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Content Title"
                      value={contentItem.title}
                      onChange={(e) =>
                        handleContentChange(index, "title", e.target.value)
                      }
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Content Description"
                      value={contentItem.description}
                      onChange={(e) =>
                        handleContentChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Upload Video</Typography>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => handleContentChange(index, "video", e)}
                      ref={videoFileInputRef}
                      key={
                        index +
                        (courseData.content[index].video ? "loaded" : "empty")
                      }
                    />
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
                </React.Fragment>
              ))}
              <Grid item xs={12}>
                <Button
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={addContentField}
                >
                  Add Content
                </Button>
              </Grid>
            </Grid>
            {isLoading && <Typography>Loading...</Typography>}
            {feedbackMessage && (
              <Typography color="secondary" style={{ margin: "20px 0" }}>
                {feedbackMessage}
              </Typography>
            )}

            <StyledButton type="submit" variant="contained">
              Submit
            </StyledButton>
          </StyledForm>
        </FormContainer>
      </PageContainer>
    </>
  );
};

export default UploadCourse;
