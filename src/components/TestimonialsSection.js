import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/inter";

import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
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
} from "@mui/material";
import CardActions from "@mui/joy/CardActions";

import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";

import {
  FavoriteBorder,
  NotificationsNone,
  CheckBox,
  SignalCellularAltOutlined,
  CheckBoxRounded,
  AccessTimeOutlined,
  NotificationsNoneTwoTone,
  RemoveRedEyeTwoTone,
} from "@mui/icons-material";
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MenuButton from "@mui/joy/MenuButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ArrowRight from "@mui/icons-material/ArrowRight";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Dropdown from "@mui/joy/Dropdown";

const TestimonialsSection = () => {

  const settingsForTestimonials = {
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 3 slides at once
    slidesToScroll: 1,
    draggable: true, // Enable manual dragging
    swipeToSlide: true, // Enable manual drag
    touchMove: true, // Enable touch move
    // variableWidth: true,
    // centerMode: true,
    // centerPadding: '0%',
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={2}>
        <Card
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            boxShadow: "none",
            padding: "20px",
          }}
        >
          <CardContent>
            <Grid item xs={3} md={12}>
              <CardMedia
                component="img" // Specifies that the media component is an image
                height="auto"
                image={process.env.PUBLIC_URL + "/Vector.png"}
              />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={10}
        sx={{ position: "relative", overflow: "hidden" }}
      >
        {/* <Box sx={{background: "linear-gradient(90deg,rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,1))", width:'100%', height:'100%', position: 'absolute', top:'0', left:'0', zIndex: '0'}}/> */}
        <Card
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            boxShadow: "none",
            padding: "20px",
            paddingTop: "50px",
            width: "750px",
            margin: "0 auto",
          }}
        >
          <Slider {...settingsForTestimonials}>
            {/* Your carousel items go here */}
            <div>
              <Card
                variant="outlined"
                sx={{
                  width: 320,
                  // to make the card resizable
                  overflow: "auto",
                  borderRadius: "10px",
                  height: "150px",
                  paddingTop: "10px",
                  marginRight: 3,
                  background: "linear-gradient(0deg, #E9f1ff, #ffffff)",
                }}
              >
                <CardContent sx={{ paddingTop: "2px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <Typography
                      level="body-sm"
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "600",
                        fontSize: "16px",
                        marginRight: "10px",
                      }}
                    >
                      Jack F
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#96979A",
                      }}
                    >
                      Ex Blackrock PM
                    </Typography>
                  </Box>
                  <Typography
                    level="body-sm"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    “Love how Loch integrates portfolio analytics and whale
                    watching into one unified app.”
                  </Typography>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                sx={{
                  width: 320,
                  // to make the card resizable
                  overflow: "auto",
                  borderRadius: "10px",
                  paddingTop: "10px",
                  marginRight: 3,
                  background: "linear-gradient(0deg, #E9f1ff, #ffffff)",
                }}
              >
                <CardContent sx={{ paddingTop: "2px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <Typography
                      level="body-sm"
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "600",
                        fontSize: "16px",
                        marginRight: "10px",
                      }}
                    >
                      Yash P
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#96979A",
                      }}
                    >
                      Research, 3poch Crypto Hedge Fund
                    </Typography>
                  </Box>
                  <Typography
                    level="body-sm"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    “I use Loch everyday now. I don't think I could analyze
                    crypto whale trends markets without it. I'm addicted!”
                  </Typography>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                sx={{
                  width: 320,
                  // to make the card resizable
                  overflow: "auto",
                  borderRadius: "10px",
                  paddingTop: "10px",
                  marginRight: 3,
                  background: "linear-gradient(0deg, #E9f1ff, #ffffff)",
                }}
              >
                <CardContent sx={{ paddingTop: "2px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <Typography
                      level="body-sm"
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "600",
                        fontSize: "16px",
                        marginRight: "10px",
                      }}
                    >
                      Shiv S
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#96979A",
                      }}
                    >
                      Co-Founder Magik Labs
                    </Typography>
                  </Box>
                  <Typography
                    level="body-sm"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    “Managing my own portfolio is helpful and well designed.
                    What’s really interesting is watching the whales though. No
                    one else has made whale tracking so simple.”
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Slider>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TestimonialsSection;
