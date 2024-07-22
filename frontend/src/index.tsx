import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import UpdatePost from "./pages/UpdatePost/UpdatePost";
import DetailsPost from "./pages/DetailsPost/DetailsPost";
import Layout from "./layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/CreatePost" element={<CreatePost />} />
            <Route path="/UpdatePost/:id" element={<UpdatePost />} />
            <Route path="/DetailsPost/:id" element={<DetailsPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
