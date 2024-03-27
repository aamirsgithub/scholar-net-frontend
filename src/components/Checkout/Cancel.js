import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import "./styles/Cancel.css";
import CancelImage from "../../assets/images/cancel.png";

const CancelPage = () => {
  return (
    <div className="cancel-page">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" className="cancel-text">
            Something Went Wrong!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className="info-text">
            Payment canceled, please try after sometime
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={CancelImage} alt="Cancel" className="cancel-image" />
        </Grid>
        <Grid item xs={12}>
          <Link href="/" variant="body1" className="back-link">
            Back to Home
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default CancelPage;
