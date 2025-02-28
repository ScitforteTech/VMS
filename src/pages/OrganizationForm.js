import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Input,
  IconButton
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const OrganizationForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    contactPerson: "",
    email: "",
    phone: "",
    registrationNumber: "",
    website: "",
    taxId: "",
    address: "",
    logo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          p: 4,
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Create Organization
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Contact Person"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Registration Number"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            margin="normal"
            sx={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            margin="normal"
            sx={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Tax ID"
            name="taxId"
            value={formData.taxId}
            onChange={handleChange}
            margin="normal"
            sx={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            margin="normal"
            sx={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 1 }}
          />

          <Box mt={2} textAlign="center">
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              sx={{ display: "none" }}
              id="logo-upload"
            />
            <label htmlFor="logo-upload">
              <IconButton component="span" color="primary">
                <CloudUploadIcon fontSize="large" sx={{ color: "#fff" }} />
              </IconButton>
              <Typography sx={{ color: "#fff" }}>Upload Logo</Typography>
            </label>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#6a11cb", color: "#fff" }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default OrganizationForm;
