import React from "react";
import { styled } from "@mui/system";

const Marquee = styled("div")({
  width: "100%",
  height: "40px",
  backgroundColor: "white",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  alignItems: "center",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
});

const MarqueeContent = styled("div")({
  position: "absolute",
  whiteSpace: "nowrap",
  overflow: "hidden",
  willChange: "transform",
  animation: "marquee 60s linear infinite",
  fontSize: "15px",
  fontWeight: "bold",
  color: "#333",
  textShadow: "1px 1px 0px #fff",
  "&:hover": {
    animationPlayState: "paused",
  },
  "@keyframes marquee": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-100%)" },
  },
});

const MarqueeText = () => {
  return (
    <Marquee>
      <MarqueeContent>
        A Building With Four Walls And Tomorrow Inside. 🎓SCHOLAR NET FAST
        NUCES🎓 A community of lifelong learners, responsible global citizens,
        and champions of our own success. 🎓SCHOLAR NET FAST NUCES🎓 A community
        with high expectation and high academic achievement. A Family Of
        Learning. 🎓A Great Place For Education. A Great Place To Be. 🎓A Great
        Place To Learn. A high achieving multicultural community for learning.
      </MarqueeContent>
    </Marquee>
  );
};

export default MarqueeText;
