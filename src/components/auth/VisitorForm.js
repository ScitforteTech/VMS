// import React, { useState } from "react";
// import api from "../../services/api";
// import "../../assets/styles.css";

// const VisitorRegistration = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     cnic: "",
//     mobileNumber: "",
//     organizationName: "",
//     purposeOfVisit: "",
//     hostName: "",
//     department: "",
//     vehicleNumber: "",
//     vehicleType: "",
//     visitingOffice: "",
//     dateOfVisit: "",
//     timeOfArrival: "",
//     timeOfDeparture: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     let { name, value } = e.target;

//     if (name === "cnic") {
//       value = value.replace(/\D/g, "");
//       if (value.length > 5) value = value.slice(0, 5) + "-" + value.slice(5);
//       if (value.length > 13)
//         value = value.slice(0, 13) + "-" + value.slice(13);
//       value = value.slice(0, 15);
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     const errors = {};
//     if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
//     if (!/^\d{5}-\d{7}-\d{1}$/.test(formData.cnic))
//       errors.cnic = "CNIC must be in the format XXXXX-XXXXXXX-X.";
//     if (!/^\d{10,11}$/.test(formData.mobileNumber))
//       errors.mobileNumber = "Mobile number must be 10-11 digits.";
//     if (!formData.purposeOfVisit.trim())
//       errors.purposeOfVisit = "Purpose of visit is required.";
//     if (!formData.hostName.trim()) errors.hostName = "Host name is required.";
//     if (!formData.department.trim())
//       errors.department = "Department is required.";
//     if (!formData.visitingOffice)
//       errors.visitingOffice = "Visiting office selection is required.";
//     if (!formData.dateOfVisit)
//       errors.dateOfVisit = "Date of visit is required.";
//     if (!formData.timeOfArrival)
//       errors.timeOfArrival = "Time of arrival is required.";

//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     console.log("FROM DATA", formData)
//     try {
//       const token = localStorage.getItem("token");
//       const response = await api.post("/visitors", formData, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         }
//       });

//       console.log("Visitor Registration Response:", response.data);
//       setMessage("Visitor registered successfully!");
//       setFormData({
//         fullName: "",
//         cnic: "",
//         mobileNumber: "",
//         organizationName: "",
//         purposeOfVisit: "",
//         hostName: "",
//         department: "",
//         vehicleNumber: "",
//         vehicleType: "",
//         visitingOffice: "",
//         dateOfVisit: "",
//         timeOfArrival: "",
//         timeOfDeparture: ""
//       });
//       setErrors({});

//       if (
//         formData.vehicleType === "2-wheeler" ||
//         formData.vehicleType === "4-wheeler"
//       ) {
//         await api.post(
//           "/parking/update",
//           { vehicleType: formData.vehicleType, action: "check-in" },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`
//             }
//           }
//         );
//         console.log("Parking slots updated successfully!");
//       }

//       // if (onSubmit) onSubmit(response.data.visitor);
//     } catch (error) {
//       console.error("Error registering visitor:", error.message);
//       if (error.response) {
//         setMessage(`Failed: ${error.response.data.message}`);
//       } else {
//         setMessage("Failed to register visitor. Server unreachable.");
//       }
//     }
//   };

//   return (
//     <div className="visitor-registration-container">
//       <div className="visitor-registration-form">
//         <h2>Visitor Registration</h2>
//         {message && (
//           <p className={`message ${message.includes("Failed") ? "error-message" : "success-message"}`}>{message}</p>
//         )}
//         <form>
//           <div className="input-group-visitor">
//             <label htmlFor="fullName">Full Name</label>
//             <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required />
//             {errors.fullName && <p className="error">{errors.fullName}</p>}
//           </div>
//           <div className="input-group-visitor">
//             <label htmlFor="cnic">CNIC</label>
//             <input type="text" name="cnic" id="cnic" value={formData.cnic} onChange={handleChange} required />
//             {errors.cnic && <p className="error">{errors.cnic}</p>}
//           </div>
//           <div className="input-group-visitor">
//             <label htmlFor="mobileNumber">Mobile Number</label>
//             <input type="text" name="mobileNumber" id="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
//             {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
//           </div>
//           <div className="input-group-visitor">
//             <label htmlFor="organizationName">Organization Name</label>
//             <input type="text" name="organizationName" id="organizationName" value={formData.organizationName} onChange={handleChange} />
//           </div>
//           <div className="input-group-visitor">
//             <label htmlFor="purposeOfVisit">Purpose of Visit</label>
//             <input type="text" name="purposeOfVisit" id="purposeOfVisit" value={formData.purposeOfVisit} onChange={handleChange} required />
//             {errors.purposeOfVisit && <p className="error">{errors.purposeOfVisit}</p>}
//           </div>
//           <div className="input-group-visitor">
//             <label htmlFor="hostName">Host Name</label>
//             <input type="text" name="hostName" id="hostName" value={formData.hostName} onChange={handleChange} required />
//             {errors.hostName && <p className="error">{errors.hostName}</p>}
//           </div>
//           <div className="input-group-visitor">
//             <label htmlFor="department">Department</label>
//             <input type="text" name="department" id="department" value={formData.department} onChange={handleChange} required />
//             {errors.department && <p className="error">{errors.department}</p>}
//           </div>
//           <div className="input-group-visitor">
//             <label htmlFor="visitingOffice">Visiting Office</label>
//             <select name="visitingOffice" id="visitingOffice" value={formData.visitingOffice} onChange={handleChange} required>
//               <option value="">Select an Office</option>
//               <option value="Company A">Company A</option>
//               <option value="Company B">Company B</option>
//               <option value="Company C">Company C</option>
//             </select>
//             {errors.visitingOffice && <p className="error">{errors.visitingOffice}</p>}
//           </div>
//           <div className="input-group-visitor">
//             <label htmlFor="dateOfVisit">Date of Visit</label>
//             <input type="date" name="dateOfVisit" id="dateOfVisit" value={formData.dateOfVisit} onChange={handleChange} required />
//           </div>
//           <button onClick={handleSubmit} className="btn-primary">Register Visitor</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VisitorRegistration;

import React, { useState } from "react";
import { TextField, MenuItem, Button, CircularProgress, Container, Typography, Box, Snackbar, Alert } from "@mui/material";
import api from "../../services/api";
import "../../assets/styles.css";

const VisitorRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    cnic: "",
    mobileNumber: "",
    organizationName: "",
    purposeOfVisit: "",
    hostName: "",
    department: "",
    vehicleNumber: "",
    vehicleType: "",
    visitingOffice: "",
    dateOfVisit: "",
    timeOfArrival: "",
    timeOfDeparture: ""
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "cnic") {
      value = value.replace(/\D/g, "");
      if (value.length > 5) value = value.slice(0, 5) + "-" + value.slice(5);
      if (value.length > 13) value = value.slice(0, 13) + "-" + value.slice(13);
      value = value.slice(0, 15);
    }
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!/\d{5}-\d{7}-\d{1}/.test(formData.cnic)) errors.cnic = "Invalid CNIC format.";
    if (!/\d{10,11}/.test(formData.mobileNumber)) errors.mobileNumber = "Invalid mobile number.";
    if (!formData.purposeOfVisit.trim()) errors.purposeOfVisit = "Purpose is required.";
    if (!formData.hostName.trim()) errors.hostName = "Host name is required.";
    if (!formData.department.trim()) errors.department = "Department is required.";
    if (!formData.visitingOffice) errors.visitingOffice = "Office selection required.";
    if (!formData.dateOfVisit) errors.dateOfVisit = "Date is required.";
    if (!formData.timeOfArrival) errors.timeOfArrival = "Time of arrival is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");
    const validationErrors =validate() ;
    if (!validate()) return setErrors(validationErrors);

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await api.post("/visitors", formData, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
      });
      setMessage("Visitor registered successfully!");
      setFormData({
        fullName: "", cnic: "", mobileNumber: "", organizationName: "",
        purposeOfVisit: "", hostName: "", department: "", vehicleNumber: "",
        vehicleType: "", visitingOffice: "", dateOfVisit: "", timeOfArrival: "",
        timeOfDeparture: ""
      });
    } catch (error) {
      setMessage("Failed to register visitor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="visitor-registration-container">
      <Box className="visitor-registration-form" sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>Visitor Registration</Typography>
        {message && <Typography color={message.includes("Failed") ? "error" : "success"}>{message}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} error={!!errors.fullName} helperText={errors.fullName} margin="normal" />
          <TextField fullWidth label="CNIC" name="cnic" value={formData.cnic} onChange={handleChange} error={!!errors.cnic} helperText={errors.cnic} margin="normal" />
          <TextField fullWidth label="Mobile Number" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} error={!!errors.mobileNumber} helperText={errors.mobileNumber} margin="normal" />
          <TextField fullWidth label="Organization Name" name="organizationName" value={formData.organizationName} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Purpose of Visit" name="purposeOfVisit" value={formData.purposeOfVisit} onChange={handleChange} error={!!errors.purposeOfVisit} helperText={errors.purposeOfVisit} margin="normal" />
          <TextField fullWidth label="Host Name" name="hostName" value={formData.hostName} onChange={handleChange} error={!!errors.hostName} helperText={errors.hostName} margin="normal" />
          <TextField fullWidth label="Department" name="department" value={formData.department} onChange={handleChange} error={!!errors.department} helperText={errors.department} margin="normal" />
          <TextField select fullWidth label="Visiting Office" name="visitingOffice" value={formData.visitingOffice} onChange={handleChange} error={!!errors.visitingOffice} helperText={errors.visitingOffice} margin="normal">
            <MenuItem value="">Select an Office</MenuItem>
            <MenuItem value="Company A">Company A</MenuItem>
            <MenuItem value="Company B">Company B</MenuItem>
            <MenuItem value="Company C">Company C</MenuItem>
          </TextField>
          <TextField fullWidth type="date" label="Date of Visit" name="dateOfVisit" value={formData.dateOfVisit} onChange={handleChange} error={!!errors.dateOfVisit} helperText={errors.dateOfVisit} margin="normal" InputLabelProps={{ shrink: true }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} fullWidth>
            <Button type="submit" variant="contained" className="py-3 w-100" color="primary" disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : "Register Visitor"}
            </Button>
          </Box>
        </form>
      </Box>
      <Snackbar open={message.open} autoHideDuration={3000} onClose={() => setMessage({ ...message, open: false })}>
        <Alert severity={message.severity}>{message.text}</Alert>
      </Snackbar>
    </Container>
  );
};

export default VisitorRegistration;