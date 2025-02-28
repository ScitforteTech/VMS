import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./components/LandingPage/Pricing";
import Testimonials from "./components/LandingPage/Testimonials";
import PaymentForm from "./components/LandingPage/PaymentForm";
import Faqs from "./components/LandingPage/Faqs";
import VisitorRegistration from "./pages/VisitorRegistration";
import OrganizationForm from "./pages/OrganizationForm";
import ManagerEmployeeForm from "./pages/ManagerEmployeeForm";
import OfficeSetupForm from "./pages/OfficeSetupForm";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import HostDashboard from "./pages/HostDashboard";
import ReceptionDashboard from "./pages/ReceptionDashboard";
import SecurityDashboard from "./pages/SecurityDashboard";
import LogoutButton from "./pages/Logout";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/visitor-registration"
            element={<VisitorRegistration />}
          />
          <Route path="/OrganizationForm" element={<OrganizationForm />} />
          <Route
            path="/ManagerEmployeeForm"
            element={<ManagerEmployeeForm />}
          />
          <Route path="/OfficeSetupForm" element={<OfficeSetupForm />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/paymentform" element={<PaymentForm />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/host" element={<HostDashboard />} />
          <Route path="/reception" element={<ReceptionDashboard />} />
          <Route path="/security" element={<SecurityDashboard />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/logout" element={<LogoutButton />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
