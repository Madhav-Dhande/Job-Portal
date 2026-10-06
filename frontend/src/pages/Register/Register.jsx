import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { register, getRoles } from "../../services/AuthService";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    roleId: "",
  });

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rolesLoading, setRolesLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch roles when the Register page loads
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        setRolesLoading(true);

        const response = await getRoles();
        console.log("Roles API Response:", response.data.data);

        // Assumes the API returns an array of role objects
        const roleList = response.data.data;

        setRoles(roleList);

        const candidateRole = roleList.find(
          (role) =>
            role.name?.replace(/^ROLE_/i, "").toLowerCase() === "candidate",
        );

        setFormData((prev) => ({
          ...prev,
          roleId: candidateRole ? String(candidateRole.id) : "",
        }));

        if (candidateRole) {
          setFormData((prev) => ({
            ...prev,
            role: candidateRole.name,
          }));
        } else {
          setFormData((prev) => ({
            ...prev,
            role: "",
          }));
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
        setErrorMsg("Failed to load roles. Please try again.");
      } finally {
        setRolesLoading(false);
      }
    };

    fetchRoles();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMsg("");
    setErrorMsg("");
    setLoading(true);

    try {
      const response = await register(formData);

      console.log("Registration API Response:", response.data);

      setSuccessMsg("Account created successfully!");

      setFormData({
        firstName: "",
        email: "",
        password: "",
        role: "Candidate",
      });

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

        {successMsg && <div className="alert alert-success">{successMsg}</div>}

        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="mobile">Mobile No.</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="form-control"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength={10}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="roleId">Role</label>
            <select
              id="roleId"
              name="roleId"
              className="form-select"
              value={formData.roleId}
              onChange={handleChange}
              disabled={rolesLoading || roles.length === 0}
              required
            >
              <option value="">
                {rolesLoading ? "Loading roles..." : "Select Role"}
              </option>

              {roles.map((role) => (
                <option key={role.id} value={String(role.id)}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={loading || rolesLoading || roles.length === 0}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
