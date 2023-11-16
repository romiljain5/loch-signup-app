import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/inter";

import { styled } from "@mui/joy/styles";
import {
  Grid,
  Paper,
  IconButton,
  Typography,
  Card,
  CardContent,
  TextField,
  CardMedia,
  Divider,
  Input,
  Hidden,
} from "@mui/material";

import React, { useState } from "react";
import Button from "@mui/joy/Button";


import NotificationSection from "./components/NotificationSection";
import WhalesSection from "./components/WhalesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Signup from "./components/Signup";

function App() {
  const GradientBackground = styled("div")({
    background:
      "linear-gradient(45deg, rgba(31, 169, 17, 0.81) 12%, rgba(47, 21, 208, 1) 30%, rgba(0, 0, 0, 1) 70%)",
    height: "auto", // Adjust the height as needed
    padding: "0px",
    color: "white",
  });

  return (
    <Grid container spacing={0}>
      {/* Outer Grid */}
      <Grid item xs={12} md={12}>
        {/* Inner Grid */}
        <Grid container spacing={0}>

          <Hidden mdUp>
              {/* This is hidden on medium and larger screens */}
            <Grid item xs={12} md={5} height={'450px'}>
              <Signup/>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={7} height={"250px"}>
            <GradientBackground>
              <Grid item xs={12} md={12} lg={10} sx={{ marginLeft: "auto" }}>
                {/* Notification Section with Carousel */}
                <NotificationSection/>

                {/* Whales Section */}
                <WhalesSection/>

                {/* Testimonials Heading */}
                <Grid container spacing={0}>
                  <Grid item xs={12} md={12}>
                    <Card
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.0)",
                        boxShadow: "none",
                        padding: "20px",
                        paddingBottom: "0px",
                      }}
                    >
                      <CardContent sx={{ textAlign: "right" }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "500",
                            color: "#fff",
                            fontSize: "31px",
                            marginBottom: "10px",
                          }}
                        >
                          Testimonials
                        </Typography>
                      </CardContent>
                    </Card>
                    <Divider
                      orientation="horizontal"
                      sx={{
                        backgroundColor: "white",
                        color: "white",
                        marginRight: "30px",
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Testimonials Carousel */}
                <TestimonialsSection/>

              </Grid>
            </GradientBackground>
          </Grid>

          <Hidden lgDown>
              {/* This is hidden on small screens */}
            <Grid item xs={12} md={5}>
              <Signup/>
            </Grid>
          </Hidden>


        </Grid>
      </Grid>

    </Grid>
  );
}

export default App;
