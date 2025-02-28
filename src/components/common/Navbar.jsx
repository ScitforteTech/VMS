import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import {
  Menu as MenuIcon,
  Login as LoginIcon,
  PersonAdd as PersonAddIcon,
  Dashboard as DashboardIcon
} from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <AppBar
      position="sticky"
      sx={{ background: "#ffff", padding: "10px 20px" }}
    >
      <Toolbar className="d-flex justify-content-between">
        {/* Brand Name */}
        <div
          className="brand-name text-black"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Smart VMS
        </div>

        {/* Desktop Menu */}
        <div className="d-none d-md-flex gap-4">
          <Link
            className="text-decoration-none text-black fs-6"
            to="pricing"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Pricing
          </Link>
          <Link
            className="text-decoration-none text-black fs-6"
            to="features"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Features
          </Link>
          <Link
            className="text-decoration-none text-black fs-6"
            to="testimonials"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Testimonials
          </Link>
          <Link
            className="text-decoration-none text-black fs-6"
            to="faqs"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            FAQs
          </Link>
          <Link
            className="text-decoration-none text-black fs-6"
            to="contact"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Contact Us
          </Link>
        </div>

        {/* Login/Register or Dashboard */}
        <div className="d-none d-md-flex">
          {!isAuthenticated ? (
            <>
              <Button
                variant="outlined"
                sx={{ color: "#333", borderColor: "#333", marginRight: 2 }}
                onClick={() => navigate("/login")}
              >
                <LoginIcon sx={{ marginRight: 1 }} /> Login
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#20c997", color: "#fff" }}
                onClick={() => navigate("/register")}
              >
                <PersonAddIcon sx={{ marginRight: 1 }} /> Sign Up
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              sx={{ backgroundColor: "#20c997", color: "#fff" }}
              onClick={() => navigate("/dashboard")}
            >
              <DashboardIcon sx={{ marginRight: 1 }} /> Dashboard
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          className="d-md-none"
          sx={{ color: "#000" }}
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={menuOpen} onClose={closeMenu}>
        <List sx={{ width: 250 }}>
          <ListItem button onClick={closeMenu} style={{ cursor: "pointer" }}>
            <ListItemText primary="Features" />
          </ListItem>
          <ListItem button onClick={closeMenu} style={{ cursor: "pointer" }}>
            <ListItemText primary="Pricing" />
          </ListItem>
          <ListItem button onClick={closeMenu} style={{ cursor: "pointer" }}>
            <ListItemText primary="FAQs" />
          </ListItem>
          <ListItem button onClick={closeMenu} style={{ cursor: "pointer" }}>
            <ListItemText primary="Contact Us" />
          </ListItem>
          {!isAuthenticated ? (
            <>
              <ListItem
                button
                onClick={() => {
                  navigate("/login");
                  closeMenu();
                }}
                style={{ cursor: "pointer" }}
              >
                <LoginIcon sx={{ marginRight: 1 }} />
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  navigate("/register");
                  closeMenu();
                }}
                style={{ cursor: "pointer" }}
              >
                <PersonAddIcon sx={{ marginRight: 1 }} />
                <ListItemText primary="Sign Up" />
              </ListItem>
            </>
          ) : (
            <ListItem
              button
              onClick={() => {
                navigate("/dashboard");
                closeMenu();
              }}
              style={{ cursor: "pointer" }}
            >
              <DashboardIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Dashboard" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
