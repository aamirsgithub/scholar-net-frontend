import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularLoader({size=20}) {
  return (
    <CircularProgress
      sx={{
        color: "#FFFFFF",
        alignSelf: "center",
        justifySelf: "center",
      }}
      size={size}
      disableShrink
    />
  );
}
