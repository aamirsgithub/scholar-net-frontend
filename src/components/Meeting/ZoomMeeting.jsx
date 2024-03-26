import React, { useState, useEffect } from "react";

// // ZoomMtg.setZoomJSLib("https://source.zoom.us/2.0.1/lib", "/av");
// // ZoomMtg.preLoadWasm();
// // ZoomMtg.prepareJssdk();

const ZoomMeeting = () => {
  const [meetingNumber, setMeetingNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

//   useEffect( async () => {
//     const { ZoomMtg } = await import("@zoomus/websdk");
//     ZoomMtg.setZoomJSLib("https://source.zoom.us/2.0.1/lib", "/av");
//     ZoomMtg.preLoadWasm();
//     ZoomMtg.prepareWebSDK();
//   }, []);

useEffect(() => {
    async function setupZoom() {
      const { ZoomMtg } = await import("@zoomus/websdk");
      ZoomMtg.setZoomJSLib("https://source.zoom.us/2.0.1/lib", "/av");
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareWebSDK();
    }
    setupZoom();

    return () => {
      const zoomMeetingElements = document.querySelectorAll(".zoom-meeting");
      zoomMeetingElements.forEach((element) => element.remove());
      // If you've set up any global or document-level event listeners
      // for Zoom SDK, make sure to remove them here.
    };
  }, []);

  const getSignature = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/zoom/signature", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: 0,
      }),
    });

    const data = await response.json();
    if (data.signature) {
      startMeeting(data.signature);
    } else {
      console.error("Error getting signature");
    }
  };

  const startMeeting = (signature) => {
    ZoomMtg.init({
      leaveUrl: "http://localhost:3000", // or where you want participants to be redirected after the meeting ends
      isSupportAV: true,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature,
          meetingNumber,
          userName,
          apiKey: "v0ssVVeozLZE3gOSJf9vHSKTRwgOeBfC", // The same API Key used for generating the signature on the backend
          userEmail: "", // Optional for Zoom Web SDK
          passWord: password,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.error(error);
          },
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <>
      <div>
        <h1>Join Zoom Meeting</h1>
        <form onSubmit={getSignature}>
          <input
            type="text"
            placeholder="Meeting Number"
            value={meetingNumber}
            onChange={(e) => setMeetingNumber(e.target.value)}
            required
            style={{backgroundColor: "green"}}
          />
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Meeting Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Join Meeting</button>
        </form>
      </div>
    </>
  );
};

export default ZoomMeeting;
