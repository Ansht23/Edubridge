import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Signuppage.css";
import { toast } from "react-toastify";

const Signuppage = () => {
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    rollOrSubject: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const toggleRole = () => {
    setRole((prev) => (prev === "student" ? "teacher" : "student"));
    setFormData({
      name: "",
      rollOrSubject: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, rollOrSubject, email, password, confirmPassword } = formData;

    if (!name || !rollOrSubject || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            name,
            [role === "student" ? "rollNo" : "subject"]: rollOrSubject,
            email,
            password,
            role,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Registration successful");
        login({ email, role });
        navigate("/");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      toast.error("Error during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <h1>Signup</h1>
      <button className="toggle-btn" onClick={toggleRole}>
        Switch to {role === "student" ? "Teacher" : "Student"} Signup
      </button>

      <div className={`form-slider ${role === "teacher" ? "slide-left" : ""}`}>
        {/* Student Form */}
        <form onSubmit={handleSubmit} className="form-panel student-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="rollOrSubject"
            placeholder="Roll Number"
            value={formData.rollOrSubject}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label>Show Password</label>
          </div>
          <button type="submit">
            {loading ? "Please wait..." : "Signup as Student"}
          </button>
        </form>

        {/* Teacher Form */}
        <form onSubmit={handleSubmit} className="form-panel teacher-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="rollOrSubject"
            placeholder="Subject"
            value={formData.rollOrSubject}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label>Show Password</label>
          </div>
          <button type="submit">
            {loading ? "Please wait..." : "Signup as Teacher"}
          </button>
        </form>
      </div>

      <div className="login-link">
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signuppage;
