import React from "react";
import { Typography, Input, Button, Form } from "antd";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";

const { Title, Paragraph } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactUs = () => {
  return (
    <motion.section
      id="contact"
      className="py-5"
      style={{ background: "#f9f9f9", color: "#333" }}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <Container>
        <motion.div variants={fadeInUp}>
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
            LET’S TALK!
          </Title>
          <Paragraph
            className="text-center"
            style={{ color: "#666", fontSize: "1.1rem" }}
          >
            Join us as we explore tailored solutions, discuss industry insights,
            <br />
            and collaborate to find the best strategies for your success.
          </Paragraph>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Form
            layout="vertical"
            className="mt-4"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px rgba(32, 201, 151, 0.4)"
            }}
          >
            <Form.Item label="Name">
              <Input
                placeholder="Enter your name"
                size="large"
                style={{
                  borderRadius: "6px",
                  boxShadow: "0px 0px 8px rgba(32, 201, 151, 0.4)",
                  border: "1px solid #20c997"
                }}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                placeholder="Enter your email"
                size="large"
                style={{
                  borderRadius: "6px",
                  boxShadow: "0px 0px 8px rgba(32, 201, 151, 0.4)",
                  border: "1px solid #20c997"
                }}
              />
            </Form.Item>
            <Form.Item label="Contact No">
              <Input
                placeholder="Enter your contact number"
                size="large"
                style={{
                  borderRadius: "6px",
                  boxShadow: "0px 0px 8px rgba(32, 201, 151, 0.4)",
                  border: "1px solid #20c997"
                }}
              />
            </Form.Item>
            <Form.Item label="Message">
              <Input.TextArea
                placeholder="Enter your message"
                rows={4}
                size="large"
                style={{
                  borderRadius: "6px",
                  boxShadow: "0px 0px 8px rgba(32, 201, 151, 0.4)",
                  border: "1px solid #20c997"
                }}
              />
            </Form.Item>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                size="middle"
                shape="round"
                className="mt-2"
                onClick={() => navigate("/paymentform")}
                style={{
                  backgroundColor: "#20c997",
                  border: "none",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  transition: "0.3s",
                  boxShadow: "0px 0px 5px #20c997"
                }}
              >
                Submit
              </Button>
            </motion.div>
          </Form>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default ContactUs;
