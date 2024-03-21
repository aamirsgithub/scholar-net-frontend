import React, { useState } from "react";
import Snackbar from "@mui/joy/Snackbar";

export default function PositionedSnackbar({
  open,
  setOpen,
  variant,
  color,
  message,
}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={4000}
      open={open}
      variant={variant}
      color={color}
      onClose={handleClose}
    >
      {message}
    </Snackbar>
  );
}
