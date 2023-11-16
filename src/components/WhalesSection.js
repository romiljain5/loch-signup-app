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
import { useTheme } from '@mui/material/styles';


const WhalesSection = () => {
    const theme = useTheme();
  return (
    <Grid
      container
      spacing={0}
      sx={{
        // height: "400px",
        // [theme.breakpoints.up("sm")]: {
        //   height: "800px",
        // },
      }}
    >
      <Grid item xs={12} md={7}>
        <CardMedia
          component="img" // Specifies that the media component is an image
          height="auto"
          image={process.env.PUBLIC_URL + "/Cohorts.png"}
        />
      </Grid>

      <Grid item xs={12} md={5}>
        <Card
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            boxShadow: "none",
            padding: "20px",
          }}
        >
          <CardContent sx={{ textAlign: "right" }}>
            <IconButton
              variant="outlined"
              color="neutral"
              sx={{
                mr: "auto",
                color: "white",
                marginBottom: "10px",
              }}
            >
              <RemoveRedEyeTwoTone fontSize="large" sx={{ color: "#e8efff" }} />
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
              Watch what the whales are doing
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
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default WhalesSection;
