import React, { useState } from "react";

function InstructorMeeting({ InstructorId }) {
  // const [courseId, setCourseId] = useState("65fc598b1ce0cb419f503f98");
  console.log("inst id in inst meeting fun", InstructorId);

  const startMeeting = async () => {
    const response = await fetch(
      "http://localhost:5000/api/zoom/start-meeting",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ InstructorId }),
      }
    );

    const data = await response.json();
    console.log("data", data);
    if (response.ok) {
      alert(`Meeting Created! Join URL: ${data.joinUrl}`);
    } else {
      alert("Failed to start the meeting. Please try again.");
    }
  };

  return (
    <div>
      <button onClick={startMeeting}>Start Meeting</button>
    </div>
  );
}

export default InstructorMeeting;
