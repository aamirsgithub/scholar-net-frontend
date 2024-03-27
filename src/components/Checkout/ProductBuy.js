import "../styles/ChocolateBuy.css";
import React, { useState } from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
// import ChocolateImage from "../assets/ferrero-rocher-1.png";

const ChocolateBuy = () => {
  const [quantity, setQuantity] = useState(1);
  const chocolatePrice = 2;
  const itemName = "Ferrero Rocher";

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleCheckout = async () => {
    const checkoutData = {
      items: [
        {
          id: 1,
          quantity: quantity,
          price: chocolatePrice,
          name: itemName,
        },
      ],
    };
    try {
      const response = await fetch("http://localhost:5000/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(checkoutData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      window.location = result;

      console.log("Checkout successful:", result);
    } catch (error) {
      console.error("Error during checkout:", error.message);
    }
  };

  return (
    <Container className="container">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ color: "#7B3F00" }}
      >
        Chocolate Corner
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          {/* <img
            src={ChocolateImage}
            alt="Chocolate Box"
            className="chocolate-box-img"
          /> */}
        </Grid>

        <Grid item xs={6}>
          <div className="chocolate-details">
            <Typography variant="h6">{itemName}</Typography>
            <Typography variant="subtitle1" style={{ marginTop: 50 }}>
              Price: ${chocolatePrice}
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ marginTop: 10, fontSize: 12 }}
            >
              Add Quantity
            </Typography>
            <div className="quantity-container">
              <div className="quantity-btn-wrapper">
                <Button
                  className={`quantity-btn negative-btn ${
                    quantity === 1 && "disabled-btn"
                  }`}
                  onClick={handleDecrease}
                  disabled={quantity === 1}
                >
                  -
                </Button>
              </div>
              <Typography variant="body1" className="quantity-display">
                {quantity}
              </Typography>
              <div className="quantity-btn-wrapper">
                <Button
                  className="quantity-btn positive-btn"
                  onClick={handleIncrease}
                >
                  +
                </Button>
              </div>
            </div>

            <Typography variant="subtitle1" style={{ marginTop: 30 }}>
              Amount to be paid: ${quantity * chocolatePrice}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              className="checkout-btn"
            >
              Checkout
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChocolateBuy;
