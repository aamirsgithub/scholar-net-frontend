import React, { useState, useEffect } from "react";

function StudentMeeting() {
  const [courseId, setCourseId] = useState("");
  const [meetingUrl, setMeetingUrl] = useState("");

  useEffect(() => {
    const fetchMeetingDetails = async () => {
      const response = await fetch(
        `http://localhost:5000/api/zoom/meeting-details/${courseId}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setMeetingUrl(data.joinUrl);
        alert(`Meeting started! Join URL: ${data.joinUrl}`);
      } else {
        alert("Meeting not found. Please check the course ID and try again.");
      }
    };

    fetchMeetingDetails();
  }, [courseId]);

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      /> */}
      {/* <button onClick={fetchMeetingDetails}>Join Meeting</button> */}
      {meetingUrl && (
        <p>
          Join the meeting:{" "}
          <a href={meetingUrl} target="_blank" rel="noopener noreferrer">
            Click Here
          </a>
        </p>
      )}
    </div>
  );
}

export default StudentMeeting;
