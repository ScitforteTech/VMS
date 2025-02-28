import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Grid, MenuItem } from "@mui/material";

const ManagerEmployeeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    dob: "",
    joiningDate: "",
    employeeId: "",
    address: "",
    salary: "",
    gender: "",
    status: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
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
          Add Manager/Employee
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {[
              { label: "Full Name", name: "fullName" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone", name: "phone" },
              { label: "Designation", name: "designation" },
              { label: "Department", name: "department" },
              { label: "Date of Birth", name: "dob", type: "date" },
              { label: "Joining Date", name: "joiningDate", type: "date" },
              { label: "Employee ID", name: "employeeId" },
              { label: "Salary", name: "salary", type: "number" },
            ].map((field, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  type={field.type || "text"}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  InputProps={{ sx: { backgroundColor: "#fff", borderRadius: 1 } }}
                  InputLabelProps={field.type === "date" ? { shrink: true } : {}}
                />
              </Grid>
            ))}
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
                select
                fullWidth
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                InputProps={{ sx: { backgroundColor: "#fff", borderRadius: 1 } }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                InputProps={{ sx: { backgroundColor: "#fff", borderRadius: 1 } }}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input type="file" accept="image/*" onChange={handleFileChange} style={{ color: "#fff", marginTop: "10px" }} />
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

export default ManagerEmployeeForm;
