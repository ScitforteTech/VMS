import React from "react";
import { Card, Avatar, Typography, Row, Col } from "antd";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Title, Paragraph } = Typography;

const testimonials = [
  {
    name: "Ayesha Khan",
    position: "HR Manager, TechCorp",
    feedback:
      "This system has made visitor management seamless and secure. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Ali Raza",
    position: "CEO, Digital Solutions",
    feedback:
      "The automation and security features are excellent. It saves a lot of time!",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Sana Ahmed",
    position: "Operations Lead, Global Enterprises",
    feedback:
      "A must-have system for modern offices. The user experience is smooth and intuitive!",
    avatar: "https://i.pravatar.cc/150?img=9"
  },
  {
    name: "Zubair Malik",
    position: "Admin Head, XYZ Corporation",
    feedback: "A game-changer for visitor check-ins and security management.",
    avatar: "https://i.pravatar.cc/150?img=7"
  },
  {
    name: "Hina Farooq",
    position: "Facility Manager, ABC Enterprises",
    feedback:
      "The dashboard is user-friendly, and real-time tracking is very useful.",
    avatar: "https://i.pravatar.cc/150?img=8"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section
      id="testimonials"
      className="py-5"
      style={{ background: "#fff", color: "#333" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Title
  level={2}
  style={{
    fontWeight: "bold",
    color: "#212529",
    fontFamily: "Verdana",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2.5rem" 
  }}
>
            What Our Clients Say
          </Title>
        </motion.div>

        <Slider {...settings} className="mt-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              style={{ height: "100%" }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Card
                  bordered={false}
                  style={{
                    background: "#f9f9f9",
                    padding: "30px",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    margin: "15px",
                    minHeight: "320px", // Forces equal height for all cards
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1 // Ensures all cards stretch to the same height
                  }}
                >
                  <Row justify="center" align="middle">
                    <Col span={6}>
                      <Avatar src={item.avatar} size={80} />
                    </Col>
                    <Col span={18}>
                      <Title
                        level={4}
                        style={{
                          marginTop: "10px",
                          color: "#34495e",
                          fontSize: "1.5rem"
                        }}
                      >
                        {item.name}
                      </Title>
                      <Paragraph
                        type="secondary"
                        style={{ fontSize: "1.1rem", color: "#777" }}
                      >
                        {item.position}
                      </Paragraph>
                      <Paragraph
                        style={{
                          color: "#666",
                          fontSize: "1.2rem",
                          fontStyle: "italic",
                          flexGrow: 1
                        }}
                      >
                        "{item.feedback}"
                      </Paragraph>
                    </Col>
                  </Row>
                </Card>
              </div>
            </motion.div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
