import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Testimonials from "../components/LandingPage/Testimonials";
import FAQSection from "../components/LandingPage/Faqs";
import Pricing from "../components/LandingPage/Pricing";
import ContactUs from "../components/LandingPage/Contact";
import FeatureCard from "../components/LandingPage/FeatureCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css";

const { Title, Paragraph } = Typography;

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ backgroundColor: "#fff", fontFamily: "Verdana" }}
    >
      <Navbar isAuthenticated={false} />

      {/* Hero Section */}
      <motion.header
        className="landing-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container className="hero-container">
          <div className="row align-items-center">
            {/* Left Side Text Content */}
            <motion.div
              className="col-lg-6 col-md-12 text-center text-lg-start"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Title level={1} className="hero-title">
                Streamline Visitor Management Effortlessly
              </Title>
              <Paragraph className="hero-description">
                Enhance security, improve visitor experience, and automate
                check-ins with our Smart VMS. Designed for multi-company
                buildings and individual businesses, our system ensures seamless
                visitor tracking, real-time notifications, and compliance with
                ease.
              </Paragraph>
                <Button className="hero-button">Get Started</Button>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              className="col-lg-6 col-md-12 text-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src="https://i.pinimg.com/736x/ea/da/f2/eadaf22eb4c75b6f61a54c80e256c43e.jpg"
                alt="Landing Visual"
                className="hero-image"
              />
            </motion.div>
          </div>
        </Container>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <FeatureCard />
        <Pricing />
        <FAQSection />
        <Testimonials />
        <ContactUs />
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
