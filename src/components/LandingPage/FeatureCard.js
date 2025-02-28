import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaClock,
  FaClipboardList,
  FaBuilding,
  FaBan,
  FaBox,
  FaCar,
  FaChartBar
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "Pre-Registration",
    desc: "Approve or reject visitors before they arrive."
  },
  {
    icon: <FaClock />,
    title: "Check-in/Check-out",
    desc: "Track visitor entries and exits in real time."
  },
  {
    icon: <FaClipboardList />,
    title: "Visitor History Logs",
    desc: "Maintain visitor records for audits and security."
  },
  {
    icon: <FaBuilding />,
    title: "Multi-Location Support",
    desc: "Manage multiple office locations seamlessly."
  },
  {
    icon: <FaBan />,
    title: "Watchlist Screening",
    desc: "Automatically flag unauthorized visitors."
  },
  {
    icon: <FaBox />,
    title: "Delivery Management",
    desc: "Track incoming packages and deliveries efficiently."
  },
  {
    icon: <FaCar />,
    title: "Parking Management",
    desc: "Manage parking allocations and vehicle verifications."
  },
  {
    icon: <FaChartBar />,
    title: "Admin & Analytics",
    desc: "Get insights and reports on visitor trends."
  }
];

const FeatureCard = () => {
  return (
    <Box
    id="features"
      sx={{ width: "100%", textAlign: "center", py: 8, background: "#f8f9fa" }}
    >
      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#212529",
            fontFamily: "Verdana",
            mb: 5
          }}
        >
          Key Features
        </Typography>
      </motion.div>

      {/* Feature Grid */}
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                sx={{
                  height: "100%", // ✅ Ensures all cards have equal height
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between", // ✅ Proper alignment
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  background: "#fff",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)"
                  }
                }}
              >
                <Box sx={{ fontSize: "40px", color: "#20c997", mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#212529",
                    fontFamily: "Verdana"
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#6c757d", fontFamily: "Verdana", mt: 1 }}
                >
                  {feature.desc}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureCard;
