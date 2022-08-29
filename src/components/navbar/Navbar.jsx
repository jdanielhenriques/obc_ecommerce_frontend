import React from "react";
import Shop2OutlinedIcon from "@mui/icons-material/Shop2Outlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/logo.svg";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

export default function Navbar({ navigateTo }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#363062" }}>
          <Toolbar>
            <img
              className="logo"
              src={logo}
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => navigateTo(PAGE_PRODUCTS)}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Shop2OutlinedIcon
              fontSize="large"
              style={{ cursor: "pointer" }}
              onClick={() => navigateTo(PAGE_CART)}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
