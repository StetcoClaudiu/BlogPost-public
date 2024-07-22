import React, { FC, useState } from "react";
import "./LoginCard.css";
import { Input, Button, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../../redux/loginRegisterSlice";
import axios from "axios";
import { toggleUser } from "../../redux/userSlice";

const LoginCard: React.FC = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    dispatch(toggleLogin(false));
  }

  const handleClickLogin = async () => {
    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/connect_user/",
        data
      );
      message.success("Login successfully");
      handleClick();
      const data1 = await response.data;
      dispatch(
        toggleUser({
          logged: true,
          id: data1.id,
          username: data1.username,
          first_name: data1.first_name,
          last_name: data1.last_name,
          email: data1.email,
        })
      );
    } catch (error) {
      console.error(error);
      message.error("Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="exit-login" onClick={handleClick}>
        <CloseOutlined />
      </div>

      <div className="login-box">
        <div className="login-title">Log In</div>
        <Input
          placeholder="Username"
          size="large"
          className="login-input"
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          placeholder="Password"
          size="large"
          type="password"
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button
          type="primary"
          className="login-button"
          onClick={handleClickLogin}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default LoginCard;
