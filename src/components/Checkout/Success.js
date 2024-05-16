import React, { useState, useEffect } from "react";
import { Grid, Typography, Link } from "@mui/material";
import "./styles/Success.css";
import SuccessTick from "../../assets/images/tick.png";
import { useSearchParams } from "react-router-dom";

const SuccessPage = () => {
  let [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
// console.log("session id:", sessionId)
  useEffect(() => {
    const processPaymentSuccess = async () => {
      const response = await fetch(
        `http://localhost:5000/payment-success?session_id=${sessionId}`,
        {
          credentials: "include", 
        }
      );
      const data = await response.json();
      console.log("payment success",data);
      localStorage.setItem("cartItems", JSON.stringify([]));
    };

    if (sessionId) {
      processPaymentSuccess();
    }
  }, [sessionId]);

  return (
    <div className="success-page d-flex justify-content-center">
      <Grid container spacing={2} sx={{display: "flex", justifyContent: "center", width: "100%"}}>
        <Grid item xs={12}>
          <Typography variant="h4" className="success-text">
            Payment Successful
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className="info-text">
            Now you have full excess to all of the content of this course
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{display: "flex", justifyContent: "center", width: "100%"}}>
          <img src={SuccessTick} alt="Tick" className="tick-image" />
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

export default SuccessPage;
