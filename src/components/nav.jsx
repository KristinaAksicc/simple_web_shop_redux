import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="text">
            <Link to="/" style={linkStyle}>
              Products page
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/ShoppingCart" style={linkStyle}>
              Cart
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
