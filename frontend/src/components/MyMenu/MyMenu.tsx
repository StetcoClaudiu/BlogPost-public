import React, { useState } from "react";
import logo from "./logo.svg";
import "./MyMenu.css";
import type { MenuProps } from "antd";
import { Menu, message } from "antd";
import { Button, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, toggleRegister } from "../../redux/loginRegisterSlice";
import { RootState } from "../../redux/store";
import { resetUser, toggleUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleOptions } from "../../redux/optionsSlice";
import { factory } from "typescript";

type MenuItem = Required<MenuProps>["items"][number];

const MyMenu: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userState = useSelector((state: RootState) => state.user);
  const optionsState = useSelector((state: RootState) => state.options);
  const items: MenuItem[] = [
    {
      label: "Dashboard",
      key: "dashboard",
    },
  ];

  if (userState.logged) {
    items.push({
      label: "My posts",
      key: "my_posts",
    });
  }
  const initialCurrent = optionsState.options ? "my_posts" : "dashboard";

  const [current, setCurrent] = useState<string>(initialCurrent);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    if (e.key === "my_posts") dispatch(toggleOptions(true));
    else dispatch(toggleOptions(false));
  };

  function handleCLickLogin() {
    if (userState.logged) {
      navigate("/CreatePost");
    } else dispatch(toggleLogin(true));
  }

  function handleCLickRegister() {
    if (userState.logged) {
      dispatch(resetUser());
      dispatch(toggleOptions(false));
      setCurrent("dashboard");
      message.success("Logged out");
    } else dispatch(toggleRegister(true));
  }

  return (
    <div className="menu-container">
      <Menu
        className="menu-left"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div className="title-menu">BlogPost</div>
      <Flex className="menu-right" gap="small" wrap>
        <Button type="primary" onClick={handleCLickLogin}>
          {userState.logged ? "New post" : "Sign in"}
        </Button>
        <Button onClick={handleCLickRegister}>
          {userState.logged ? "Log out" : "Sign up"}
        </Button>
      </Flex>
    </div>
  );
};

export default MyMenu;
