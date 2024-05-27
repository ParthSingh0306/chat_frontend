import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { registerRoute } from "../utils/APIRoutes";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { username, email, password, confirmPassword } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      console.log(data);
      if (data.statusCode >= 400) {
        toast.error(data.data);
      }
      if (data.statusCode < 400) {
        toast.success(data.message);
        localStorage.setItem("chat-app-user", JSON.stringify(data.data));
        navigate("/setavatar");
      }
    }
  };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (password !== confirmPassword) {
      toast.error("Password and Confirm must be Same!");
      return false;
    } else if (username.length < 3) {
      toast.error("Username should be greater than 3 characters");
      return false;
    } else if (!/^[A-Za-z][A-Za-z0-9_]{5,29}$/.test(username)) {
      toast.error("Invalid username format.");
      return false;
    } else if (/[^A-Za-z0-9_]/.test(username)) {
      toast.error("Username should not contain special characters.");
      return false;
    } else if (password.length < 8) {
      toast.error("Password should be equal or greater than 8 characters");
      return false;
    } else if (!passwordRegex.test(password)) {
      toast.error(
        "Password should contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>Snappy</h1>
          </div>

          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            onChange={(e) => handleChange(e)}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            onChange={(e) => handleChange(e)}
          />

          <button type="submit">Create User</button>
          <span>
            Already have an Account? <Link to="/login">Login</Link>{" "}
          </span>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Register;
