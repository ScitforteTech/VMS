import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Typography, Row, Col } from "antd";
import { motion } from "framer-motion";
import {
  CheckOutlined,
  StarOutlined,
  CrownOutlined,
  PlayCircleOutlined
} from "@ant-design/icons";
import "../../assets/styles.css";

const { Title, Paragraph } = Typography;

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "STANDARD",
      subtitle: "Timesheeting & Billing",
      price: "$5.49",
      billing: "per seat/month billed annually (or $6.99 if billed monthly)",
      icon: <CheckOutlined style={{ fontSize: "2rem", color: "#20c997" }} />,
      bgColor: "#FFFFFF",
      textColor: "#212529",
      borderColor: "#E0E0E0" 
    },
    {
      title: "PRO",
      subtitle: "Profit & Productivity",
      price: "$7.99",
      billing: "per seat/month billed annually (or $9.99 if billed monthly)",
      icon: <StarOutlined style={{ fontSize: "2rem", color: "#20c997" }} />,
      bgColor: "#FFFFFF",
      textColor: "#212529",
      borderColor: "#E0E0E0"
    },
    {
      title: "ENTERPRISE",
      subtitle: "Control & Security",
      price: "$11.99",
      billing: "per seat/month billed annually (or $14.99 if billed monthly)",
      icon: <CrownOutlined style={{ fontSize: "2rem", color: "#20c997" }} />,
      bgColor: "#FFFFFF",
      textColor: "#212529",
      borderColor: "#E0E0E0"
    },
    {
      title: "BEST VALUE",
      subtitle: "Productivity Suite",
      price: "$12.99",
      billing: "per seat/month billed annually (or $15.99 if billed monthly)",
      icon: <CrownOutlined style={{ fontSize: "2rem", color: "#20c997" }} />,
      bgColor: "#FFFFFF",
      textColor: "#212529",
      borderColor: "#20c997", 
      borderWidth: "4px"
    }
  ];

  return (
    <motion.section
      id="pricing"
      className="py-5 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Title
            level={2}
            style={{
              fontWeight: "bold",
              color: "#212529",
              fontFamily: "Verdana",
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "2.5rem" // Adjust the size if needed
            }}
          >
            Plans & Pricing
          </Title>
          <Paragraph style={{ fontSize: "1.2rem", color: "#6c757d" }}>
            Get started for free and upgrade to get more features.
          </Paragraph>
        </motion.div>

        <Row
          gutter={[24, 24]}
          justify="center"
          align="stretch"
          className="mt-4"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {plans.map((plan, index) => (
            <Col xs={24} sm={12} md={6} key={index} style={{ display: "flex" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                style={{ width: "100%", flex: 1 }}
              >
                <Card
                  bordered={true}
                  style={{
                    textAlign: "center",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    background: plan.bgColor,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                    minHeight: "100%",
                    borderColor: plan.borderColor,
                    borderWidth:
                      plan.title === "BEST VALUE" ? plan.borderWidth : "1px"
                  }}
                >
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {plan.icon}
                    </motion.div>
                    <Title
                      level={4}
                      style={{
                        color: plan.textColor,
                        margin: "10px 0",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {plan.title}
                    </Title>
                    <Paragraph
                      strong
                      style={{ fontSize: "1rem", color: plan.textColor }}
                    >
                      {plan.subtitle}
                    </Paragraph>
                    <Title level={3} style={{ color: plan.textColor }}>
                      {plan.price}
                    </Title>
                    <Paragraph
                      style={{
                        fontSize: "0.9rem",
                        color: plan.textColor
                      }}
                    >
                      {plan.billing}
                    </Paragraph>
                  </div>

                  <motion.div whileHover={{ scale: 1.1 }}>
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
                      Upgrade
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </motion.section>
  );
};

export default Pricing;
