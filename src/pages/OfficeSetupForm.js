import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Grid, MenuItem } from "@mui/material";

const OfficeSetupForm = () => {
  const [formData, setFormData] = useState({
    officeName: "",
    officeType: "",
    address: "",
    employeesCount: "",
    contactNumber: "",
    department: "",
    departmentHead: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Office Setup Data:", formData);
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          p: 4,
          boxShadow: 3,
          borderRadius: 3,
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          mt: 5,
        }}
      >
        <Typography variant="h5" gutterBottom textAlign="center">
          Office & Department Setup
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Office Name"
                name="officeName"
                value={formData.officeName}
                onChange={handleChange}
                required
                InputProps={{ sx: { backgroundColor: "#fff", borderRadius: 1 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Office Type"
                name="officeType"
                value={formData.officeType}
                onChange={handleChange}
                required
                InputProps={{ sx: { backgroundColor: "#fff", borderRadius: 1 } }}
              >
                <MenuItem value="Head Office">Head Office</MenuItem>
                <MenuItem value="Branch Office">Branch Office</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                InputProps={{ sx: { backgroundColor: "#fff", borderRadius: 1 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Employees Count"
                name="employeesCount"
                type="number"
                value={formData.employeesCount}
                onChange={handleChange}
                required
                InputProps={{ sx: { backgroundColor: "#fff", borderRadius: 1 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                InputProps={{ sx: { backgroundColor: "#fff", borderRadius: 1 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                InputProps={{ sx: { backgroundColor: "#fff", borderRadius: 1 } }}
              >
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Sales">Sales</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Department Head"
                name="departmentHead"
                value={formData.departmentHead}
                onChange={handleChange}
                required
                InputProps={{ sx: { backgroundColor: "#fff", borderRadius: 1 } }}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, p: 1.5 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default OfficeSetupForm;
