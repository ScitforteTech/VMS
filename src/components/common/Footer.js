import React from "react";
import { Container, Typography, Link, Grid, Box } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import "../../assets/styles.css";

const Footer = () => (
  <footer
    className="footer"
    style={{
      background: "#fff",
      color: "#333",
      padding: "3rem 0",
      boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
      borderTop: "2px solid #ddd",
      transition: "all 0.3s ease-in-out",
    }}
  >
    <Container>
      <Grid container spacing={4} justifyContent="flex-start">
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            align="left"
            style={{
              color: "#111",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            About ScitForte
          </Typography>
          <Typography
            variant="body2"
            align="left"
            style={{
              color: "#555",
              lineHeight: "1.8",
              fontSize: "0.95rem",
              textAlign: "left",
            }}
          >
            ScitForte is a boutique advisory firm specializing in business
            transformation and operational excellence. We provide strategic
            insights, market analysis, and customized advisory services to help
            our clients drive sustainable growth.
          </Typography>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            align="left"
            style={{
              color: "#111",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            align="left"
            style={{
              color: "#555",
              lineHeight: "1.8",
              fontSize: "0.95rem",
              textAlign: "left",
            }}
          >
            📞 Phone:{" "}
            <Link
              href="tel:+92 306 9771771"
              color="inherit"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#007bff",
              }}
            >
              +92 302 8248442
            </Link>
            <br />
            ✉️ Email:{" "}
            <Link
              href="mailto:info@scitforte.com"
              color="inherit"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#ff4757",
              }}
            >
              contact@scitforte.com
            </Link>
            <br />
            📍 C-91, 11th Jami Commercial Street 11, DHA Phase 7, Karachi, 75500
          </Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            align="left"
            style={{
              color: "#111",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Follow Us
          </Typography>
          <Box display="flex" justifyContent="flex-start" gap={2}>
            {[
              {
                href: "https://www.facebook.com/scitforte",
                icon: <Facebook />,
                label: "Facebook",
                bgColor: "#1877F2",
              },
              {
                href: "https://twitter.com/scitforte",
                icon: <Twitter />,
                label: "Twitter",
                bgColor: "#1DA1F2",
              },
              {
                href: "https://www.linkedin.com/company/scitforte",
                icon: <LinkedIn />,
                label: "LinkedIn",
                bgColor: "#0077B5",
              },
              {
                href: "https://www.instagram.com/scitforte",
                icon: <Instagram />,
                label: "Instagram",
                bgColor: "#E4405F",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label={social.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  background: "#f1f1f1",
                  padding: "12px",
                  borderRadius: "50%",
                  transition: "all 0.3s ease-in-out",
                  textDecoration: "none",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = social.bgColor;
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#f1f1f1";
                  e.currentTarget.style.color = "#333";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {social.icon}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Typography
        variant="body2"
        align="left"
        style={{
          marginTop: "2rem",
          paddingTop: "1rem",
          borderTop: "1px solid #ddd",
          color: "#777",
          fontSize: "0.9rem",
          textAlign: "left",
        }}
      >
        &copy; {new Date().getFullYear()} ScitForte. All rights reserved.
      </Typography>
    </Container>
  </footer>
);

export default Footer;
