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
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
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
            Create an Account
          </Typography>
        </Box>

        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        {/* Signup Form */}
        <Box component="form" onSubmit={handleChange} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#6c757d" }} />
                </InputAdornment>
              )
            }}
          />

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

          {/* Signup Button */}
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
              "Sign Up"
            )}
          </Button>
        </Box>

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

        {/* Google Signup Button */}
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
          Sign Up with Google
        </Button>

        {/* Already Have an Account? */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2" sx={{ color: "#6c757d" }}>
            Already have an account?{" "}
            <a
              href="/login"
              style={{
                color: "#20c997",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Login
            </a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;
