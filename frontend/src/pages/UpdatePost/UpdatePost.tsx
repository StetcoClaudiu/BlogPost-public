import { Button, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import "./UpdatePost.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const parm = useParams();

  useEffect(() => {
    const InitializePost = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/blog_post_details/${parm.id}/`
        );
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error(error);
      }
    };
    InitializePost();
  }, []);

  const navigate = useNavigate();

  const handleClick = async () => {
    const data = {
      title: title,
      content: content,
    };

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/blog_post_details/${parm.id}/`,
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
      <div className="title-create-post">Update your post</div>
      <Input
        placeholder="Title"
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
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        type="primary"
        className="container-post-button"
        onClick={handleClick}
      >
        Update
      </Button>
    </div>
  );
}
