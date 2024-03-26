import React, { useState } from "react";

function InstructorMeeting({ CreateMeeting }) {
  const [courseId, setCourseId] = useState("65fc598b1ce0cb419f503f98");
  console.log("course id out", courseId);
  const startMeeting = async () => {
    // console.log("course id", courseId);
    const response = await fetch(
      "http://localhost:5000/api/zoom/start-meeting",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId }),
      }
    );

    const data = await response.json();
    console.log("data", data);
    if (response.ok) {
      alert(`Meeting started! Join URL: ${data.joinUrl}`);
    } else {
      alert("Failed to start the meeting. Please try again.");
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      /> */}
      <button onClick={startMeeting}>Start Meeting</button>
    </div>
  );
}

export default InstructorMeeting;
