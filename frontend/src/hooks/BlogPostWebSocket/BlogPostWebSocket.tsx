import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setBlogPosts,
  updateBlogPost,
  deleteBlogPost,
} from "../../redux/blogPostSlice";
import axios from "axios";

const BlogPostWebSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitialBlogPosts = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/blog_post_list/"
        );
        dispatch(setBlogPosts(response.data.blog_post));
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchInitialBlogPosts();

    const ws = new WebSocket("ws://127.0.0.1:8000/ws/blog_posts/");

    ws.onmessage = (event) => {
      try {
        const data: any = JSON.parse(event.data);
        if (data.action === "update") {
          dispatch(updateBlogPost(data.blog));
        } else if (data.action === "delete" && data.id) {
          dispatch(deleteBlogPost(data.id));
        }
      } catch (error) {
        console.error("Error handling WebSocket message:", error);
      }
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);

  return null;
};

export default BlogPostWebSocket;
