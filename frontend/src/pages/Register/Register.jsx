import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { register } from "../../services/AuthService";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "Candidate",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setSuccessMsg("");
    setErrorMsg("");
    setLoading(true);

    try {

      const response = await register(formData);

      console.log("API Response:", response.data);

      setSuccessMsg("Account created successfully!");

      setFormData({
        fullName: "",
        email: "",
        password: "",
        role: "Candidate",
      });

      // Redirect after successful registration
      navigate("/login");

    } catch (error) {

      console.error("Registration Error:", error);

      const message =
        error.response?.data?.message ||
        "Registration failed. Please try again.";

      setErrorMsg(message);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h2>Create Account</h2>

        {successMsg && (
          <div className="alert alert-success">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="alert alert-danger">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="fullName">
              Full Name
            </label>

            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="role">
              Role
            </label>

            <select
              id="role"
              name="role"
              className="form-select"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Candidate">
                Candidate
              </option>

              <option value="Employer">
                Employer
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;