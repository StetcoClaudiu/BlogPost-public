import React from "react";
import BlogPostWebSocket from "./hooks/BlogPostWebSocket/BlogPostWebSocket";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <BlogPostWebSocket />
      <Outlet />
    </>
  );
};

export default Layout;
