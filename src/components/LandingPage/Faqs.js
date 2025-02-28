import React from "react";
import { Collapse, Typography, Divider } from "antd";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const faqData = [
  {
    question: "What is a Visitor Management System (VMS)?",
    answer:
      "A VMS streamlines visitor registration, tracking, and security for businesses."
  },
  {
    question: "How does VMS enhance security?",
    answer:
      "It ensures authorized access through approvals, QR codes, and watchlist screening."
  },
  {
    question: "Can visitors pre-register?",
    answer:
      "Yes, hosts share a unique link for visitors to register in advance."
  },
  {
    question: "How does QR code check-in work?",
    answer:
      "Approved visitors scan their QR code at reception for quick access."
  },
  {
    question: "What if a visitor arrives without pre-registration?",
    answer:
      "Walk-ins can register at reception, and hosts are notified for approval."
  }
];

const FAQSection = () => {
  return (
    <motion.section
      id="faqs"
      className="py-5"
      style={{ background: "#f9f9f9", color: "#333" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
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
            Frequently Asked Questions
          </Title>
          <Divider style={{ borderColor: "#ccc" }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Collapse
            accordion
            className="mt-4"
            expandIconPosition="end"
            style={{
              background: "transparent",
              border: "none"
            }}
          >
            {faqData.map((item, index) => (
              <Panel
                header={
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#34495e",
                      textAlign: "left"
                    }}
                  >
                    {item.question}
                  </motion.div>
                }
                key={index}
                style={{
                  background: "#fff",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  textAlign: "left"
                }}
              >
                <Paragraph
                  style={{ color: "#666", fontSize: "1rem", textAlign: "left" }}
                >
                  {item.answer}
                </Paragraph>
              </Panel>
            ))}
          </Collapse>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default FAQSection;
