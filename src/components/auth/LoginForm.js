import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Paper,
  Box,
  IconButton,
  InputAdornment,
  Divider
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GoogleIcon from "@mui/icons-material/Google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="xs" sx={{ fontFamily: "Verdana" }}>
      <Paper
        elevation={3}
        sx={{ padding: 4, mt: 8, textAlign: "center", borderRadius: "16px" }}
      >
        {/* Back Icon & Welcome Text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            mb: 4
          }}
        >
          <IconButton
            sx={{
              color: "#20c997",
              position: "absolute",
              left: "-65px",
              "&:hover": { backgroundColor: "transparent" }
            }}
            onClick={() => navigate("/")}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography variant="h5" color="#212529" fontWeight="bold">
            Welcome Back
          </Typography>
        </Box>

        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        {step === 1 ? (
          <Box component="form" onSubmit={handleChange} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "#6c757d" }} />
                  </InputAdornment>
                )
              }}
            />

            {/* Password Field with Eye Icon */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#6c757d" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        color: "#20c997",
                        position: "absolute",
                        right: "-40px",
                        "&:hover": { backgroundColor: "transparent" }
                      }}
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            {/* Login Button */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                background: "#20c997",
                mt: 2,
                borderRadius: "25px",
                padding: "10px 0px",
                fontSize: "14px"
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </Button>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleChange} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Enter OTP"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                background: "#20c997",
                borderRadius: "25px",
                padding: "10px 0px",
                fontSize: "14px"
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Verify OTP"
              )}
            </Button>
          </Box>
        )}

        {/* OR Section with Equal Spacing */}
        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <Divider sx={{ flexGrow: 1, backgroundColor: "#6c757d" }} />
          <Typography
            sx={{
              mx: 2,
              color: "#6c757d",
              fontSize: "14px",
              fontWeight: "bold"
            }}
          >
            OR
          </Typography>
          <Divider sx={{ flexGrow: 1, backgroundColor: "#6c757d" }} />
        </Box>

        {/* Google Login Button */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            color: "#20c997",
            borderColor: "#20c997",
            borderRadius: "25px",
            padding: "10px 0px",
            fontSize: "14px",
            "&:hover": { backgroundColor: "transparent" }
          }}
        >
          Login with Google
        </Button>

        {/* Sign Up Link */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2" sx={{ color: "#6c757d" }}>
            Don’t have an account?{" "}
            <a
              href="/register"
              style={{
                color: "#20c997",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Sign Up
            </a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
