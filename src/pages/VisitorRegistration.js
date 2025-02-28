import React from "react";
import VisitorForm from "../components/auth/VisitorForm";

const VisitorRegistrationPage = () => {
  const handleVisitorRegistration = (visitorData) => {
    console.log("Visitor Registration Data:", visitorData);
  };

  return (
    <div className="auth-page">
      <VisitorForm onSubmit={handleVisitorRegistration} />
    </div>
  );
};

export default VisitorRegistrationPage;
