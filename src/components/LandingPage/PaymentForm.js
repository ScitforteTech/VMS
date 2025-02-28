import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Input, Form, Typography } from "antd";
import { motion } from "framer-motion";
import {
  CreditCardOutlined,
  UserOutlined,
  CalendarOutlined,
  LockOutlined
} from "@ant-design/icons";
import "../../assets/styles.css";

const { Title, Text } = Typography;

const PaymentForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/OrganizationForm");
    }, 2000);
  };

  return (
    <motion.div
      className="payment-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Card
        bordered={false}
        style={{
          maxWidth: 420,
          width: "100%",
          textAlign: "center",
          padding: "2rem",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)"
        }}
      >
        <Title level={3} style={{ color: "#00d9ff", marginBottom: "1rem" }}>
          Complete Your Payment
        </Title>
        <Text style={{ color: "#bbb" }}>Secure & Encrypted Transactions</Text>

        <Form
          layout="vertical"
          onFinish={handlePayment}
          style={{ marginTop: "1rem" }}
        >
          <Form.Item
            label="Cardholder Name"
            name="cardholder"
            rules={[{ required: true, message: "Enter name" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            label="Card Number"
            name="cardNumber"
            rules={[{ required: true, message: "Enter card number" }]}
          >
            <Input
              prefix={<CreditCardOutlined />}
              placeholder="1234 5678 9012 3456"
              maxLength={16}
            />
          </Form.Item>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Form.Item
              label="Expiry Date"
              name="expiry"
              rules={[{ required: true, message: "Enter expiry date" }]}
              style={{ flex: 1 }}
            >
              <Input
                prefix={<CalendarOutlined />}
                placeholder="MM/YY"
                maxLength={5}
              />
            </Form.Item>

            <Form.Item
              label="CVV"
              name="cvv"
              rules={[{ required: true, message: "Enter CVV" }]}
              style={{ flex: 1 }}
            >
              <Input
                prefix={<LockOutlined />}
                placeholder="123"
                maxLength={3}
                type="password"
              />
            </Form.Item>
          </div>

          <Form.Item>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                style={{
                  backgroundColor: "#00d9ff",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0px 0px 10px rgba(0, 217, 255, 0.5)",
                  transition: "0.3s"
                }}
              >
                Pay Now
              </Button>
            </motion.div>
          </Form.Item>
        </Form>
      </Card>
    </motion.div>
  );
};

export default PaymentForm;
