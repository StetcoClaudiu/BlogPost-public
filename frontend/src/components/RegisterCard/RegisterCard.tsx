import React, { FC, useState } from "react";
import "./RegisterCard.css";
import { Input, Button, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleRegister } from "../../redux/loginRegisterSlice";
import axios from "axios";
import { RootState } from "../../redux/store";

const RegisterCard: React.FC = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleClick() {
    dispatch(toggleRegister(false));
  }

  const handleClickRegister = async () => {
    if (password !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }
    const data = {
      username,
      first_name,
      last_name,
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user_list/",
        data
      );
      handleClick();
      message.success("Register successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <div className="exit-register" onClick={handleClick}>
        <CloseOutlined />
      </div>

      <div className="register-box">
        <div className="register-title">Register</div>

        <Input
          placeholder="Username"
          size="large"
          className="register-input"
          onChange={(e) => setUsername(e.target.value)}
        ></Input>

        <Input
          placeholder="First Name"
          size="large"
          className="register-input"
          onChange={(e) => setFirstName(e.target.value)}
        ></Input>

        <Input
          placeholder="Last Name"
          size="large"
          className="register-input"
          onChange={(e) => setLastName(e.target.value)}
        ></Input>
        <Input
          placeholder="Email"
          size="large"
          className="register-input"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>

        <Input
          placeholder="Password"
          size="large"
          type="password"
          className="register-input"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>

        <Input
          placeholder="Confirm Password"
          size="large"
          type="password"
          className="register-input"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>

        <Button
          type="primary"
          className="register-button"
          onClick={handleClickRegister}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default RegisterCard;
