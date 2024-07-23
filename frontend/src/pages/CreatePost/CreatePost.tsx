import { Button, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import "./CreatePost.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const userState = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();

  const handleClick = async () => {
    const data = {
      title: title,
      content: content,
      author: userState.id,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/blog_post_list/",
        data
      );
      message.success("Post saved");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-create-post">
      <div className="title-create-post">Create your post</div>
      <Input
        showCount
        placeholder="Title"
        maxLength={20}
        className="container-title-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        showCount
        maxLength={500}
        placeholder="Content"
        style={{ resize: "none" }}
        className="container-content-input"
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        type="primary"
        className="container-post-button"
        onClick={handleClick}
      >
        Post
      </Button>
    </div>
  );
}
