import React, { useState } from "react";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Basic validation
  const validate = () => {
    let newErrors = {};
    if (!employee.name) newErrors.name = "Name is required";
    if (!employee.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(employee.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!employee.phone) newErrors.phone = "Phone is required";
    if (!employee.department) newErrors.department = "Select a department";
    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Employee Data:", employee);
      alert("Employee added successfully!");
      setEmployee({ name: "", email: "", phone: "", department: "" });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        {/* Department */}
        <div>
          <label>Department:</label>
          <select
            name="department"
            value={employee.department}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Finance">Finance</option>
            <option value="Sales">Sales</option>
          </select>
          {errors.department && <p className="error">{errors.department}</p>}
        </div>

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
