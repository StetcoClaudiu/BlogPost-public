import { useParams } from "react-router-dom";
import "./DetailsPost.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailsPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const parm = useParams();

  useEffect(() => {
    const initializePost = async () => {
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
    initializePost();
  }, []);

  return (
    <div className="container-details">
      <div className="title-details">{title}</div>
      <div className="content-details">{content}</div>
    </div>
  );
}
