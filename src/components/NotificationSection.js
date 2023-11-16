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

const NotificationSection = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 3 slides at once
    slidesToScroll: 1,
    draggable: true, // Enable manual dragging
    swipeToSlide: true, // Enable manual drag
    touchMove: true, // Enable touch move
  };

  const SIZES = [
    "$1,000.00",
    "$2,000.00",
    "$3,000.00",
    "$4,000.00",
    "$5,000.00",
  ];
  const DAYS = [
    "> 10 days",
    "> 20 days",
    "> 30 days",
    "> 40 days",
    "> 50 days",
  ];

  const [size, setSize] = useState("$1,000.00");
  const [day, setDays] = useState("> 30 days");

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={5}>
        <Card
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            boxShadow: "none",
            padding: "20px",
          }}
        >
          <CardContent>
            <IconButton
              variant="outlined"
              color="neutral"
              sx={{
                mr: "auto",
                color: "white",
                marginBottom: "10px",
              }}
            >
              <NotificationsNoneTwoTone
                fontSize="large"
                sx={{ color: "#e8efff" }}
              />
            </IconButton>

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
              Get notified when a highly correlated whale makes a move
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                fontSize: "16px",
                color: "#f2f2f2",
              }}
            >
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{ position: "relative", overflow: "hidden" }}
      >
        {/* <Box sx={{background: "linear-gradient(90deg,rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,1))", width:'100%', height:'100%', position: 'absolute', top:'0', left:'0', zIndex: '0'}}/> */}
        <Card
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            boxShadow: "none",
            padding: "20px",
            paddingTop: "50px",
            width: "600px",
            margin: "0 auto",
          }}
        >
          <Slider {...settings}>
            {/* Your carousel items go here */}
            <div>
              <Card
                variant="outlined"
                sx={{
                  width: 250,
                  // to make the card resizable
                  overflow: "auto",
                  borderRadius: "10px",
                  height: "210px",
                  paddingTop: "10px",
                  marginRight: 3,
                  background: "linear-gradient(0deg, #E9f1ff, #ffffff)",
                }}
              >
                <CardContent sx={{ paddingTop: "2px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <NotificationsNone fontSize="large" />

                    <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "none",
                          color: "black",
                        }}
                      >
                        Save
                      </Button>
                    </AvatarGroup>
                  </Box>
                  <Typography
                    level="body-sm"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    We’ll be sending notifications to you here
                  </Typography>
                  <TextField
                    variant="outlined"
                    placeholder="hello@gmail.com"
                    value="hello@gmail.com"
                    fullWidth
                    sx={{
                      marginTop: "15px",
                      backgroundColor: "white",
                    }}
                  />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card
                variant="outlined"
                sx={{
                  width: 250,
                  // to make the card resizable
                  overflow: "auto",
                  borderRadius: "10px",
                  height: "210px",
                  marginRight: 3,
                  paddingTop: "10px",
                }}
              >
                <CardContent sx={{ paddingTop: "2px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <SignalCellularAltOutlined fontSize="large" />

                    <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
                      <CheckBoxRounded
                        sx={{ fontSize: "30px", color: "#0071e3" }}
                      />
                    </AvatarGroup>
                  </Box>
                  <Grid
                    container
                    direction="column"
                    style={{ height: "125px" }}
                  >
                    <Grid item style={{ marginTop: "auto" }}>
                      <Typography
                        level="body-sm"
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "500",
                          fontSize: "15px",
                          marginBottom: "8px",
                        }}
                      >
                        Notify me when any wallets more than
                      </Typography>

                      <Dropdown>
                        <MenuButton
                          endDecorator={<ArrowDropDown />}
                          sx={{ backgroundColor: "#e5e5e6" }}
                        >
                          {size}
                        </MenuButton>
                        <Menu
                          sx={{
                            minWidth: 160,
                            "--ListItemDecorator-size": "24px",
                          }}
                        >
                          <ListItem nested>
                            <List aria-label="Font sizes">
                              {SIZES.map((item) => (
                                <MenuItem
                                  key={item}
                                  role="menuitemradio"
                                  aria-checked={
                                    item === size ? "true" : "false"
                                  }
                                  onClick={() => {
                                    setSize(item);
                                  }}
                                >
                                  <ListItemDecorator>
                                    {item === size && <ArrowRight />}
                                  </ListItemDecorator>{" "}
                                  {item}
                                </MenuItem>
                              ))}
                            </List>
                          </ListItem>
                        </Menu>
                      </Dropdown>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card
                variant="outlined"
                sx={{
                  width: 250,
                  // to make the card resizable
                  overflow: "auto",
                  borderRadius: "10px",
                  height: "210px",
                  paddingTop: "10px",
                  marginRight: 3,
                }}
              >
                <CardContent sx={{ paddingTop: "2px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <AccessTimeOutlined fontSize="large" />

                    <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
                      <CheckBoxRounded
                        sx={{ fontSize: "30px", color: "#0071e3" }}
                      />
                    </AvatarGroup>
                  </Box>
                  <Grid
                    container
                    direction="column"
                    style={{ height: "125px" }}
                  >
                    <Grid item style={{ marginTop: "auto" }}>
                      <Typography
                        level="body-sm"
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "500",
                          fontSize: "15px",
                          marginBottom: "8px",
                        }}
                      >
                        Notify me when any wallet dormant for
                      </Typography>

                      <Dropdown>
                        <MenuButton
                          endDecorator={<ArrowDropDown />}
                          sx={{ backgroundColor: "#e5e5e6" }}
                        >
                          {day}
                        </MenuButton>
                        <Menu
                          sx={{
                            minWidth: 160,
                            "--ListItemDecorator-size": "24px",
                          }}
                        >
                          <ListItem nested>
                            <List aria-label="Font sizes">
                              {DAYS.map((item) => (
                                <MenuItem
                                  key={item}
                                  role="menuitemradio"
                                  aria-checked={item === day ? "true" : "false"}
                                  onClick={() => {
                                    setDays(item);
                                  }}
                                >
                                  <ListItemDecorator>
                                    {item === day && <ArrowRight />}
                                  </ListItemDecorator>{" "}
                                  {item}
                                </MenuItem>
                              ))}
                            </List>
                          </ListItem>
                        </Menu>
                      </Dropdown>

                      <Typography
                        level="body-sm"
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "500",
                          fontSize: "15px",
                          marginTop: "8px",
                        }}
                      >
                        becomes active
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </div>
          </Slider>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NotificationSection;
