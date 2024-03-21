import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularLoader() {
  return (
    <CircularProgress
      sx={{
        color: "#FFFFFF",
        alignSelf: "center",
        justifySelf: "center",
      }}
      size={35}
      disableShrink
    />
  );
}
