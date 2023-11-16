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
import { useTheme } from "@mui/material/styles";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email) === true) {
      setIsValidEmail(true);
      window.open("https://app.loch.one/welcome", "_blank");
    } else {
      setIsValidEmail(false);
    }
  };
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        width: "auto",
        margin: "auto",
        //   marginTop: "18%",
        //   position: "fixed",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        overflow: "auto",
        borderWidth: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20vh",
        height: "100vh",
        [theme.breakpoints.down("md")]: {
            padding: "0 8vh",
            height: "50vh",
          position: "unset",
          top: "0",
          transform: "none",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0 8vh",
            height: "70vh",
          position: "unset",
          top: "0",
          transform: "none",
        },
      }}
    >
      <CardContent
        sx={{
        }}
      >
        <Typography
          sx={{
            fontSize: "39px",
            fontWeight: "500",
            color: "#b0b1b3",
            lineHeight: "1.3em",
            margin: "auto",
          }}
        >
          Sign up for exclusive access.
        </Typography>

        <TextField
          variant="outlined"
          placeholder="Your email address"
          fullWidth
          value={email}
          onChange={handleInputChange}
          sx={{
            marginTop: "15px",
            backgroundColor: "white",
          }}
        />

        {!isValidEmail && (
          <div style={{ color: "red", marginTop: "5px" }}>
            Please enter a valid email
          </div>
        )}
        <Button
          variant="solid"
          onClick={handleSubmit}
          sx={{
            width: "100%",
            margin: "20px auto",
            padding: "15px 0",
            fontSize: "16px",
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
          color="primary"
        >
          Get Started
        </Button>
      </CardContent>

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "1.3em",
        }}
      >
        You’ll receive an email with an invite link to join.
      </Typography>
    </Card>
  );
};

export default Signup;
