import React, { useEffect, useState } from "react";
import { List, Skeleton } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import BlogPostWebSocket from "../../hooks/BlogPostWebSocket/BlogPostWebSocket";
import { BlogPost } from "../../types/BlogPost";

const ListPost: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  const optionsState = useSelector((state: RootState) => state.options);
  const userState = useSelector((state: RootState) => state.user);

  const blogPostsState = useSelector(
    (state: RootState) => state.blogPostWebSocket
  );

  useEffect(() => {
    if (optionsState.options == false) setPosts(blogPostsState.blogPosts);
    else {
      setPosts(
        blogPostsState.blogPosts.filter((post) => post.author === userState.id)
      );
    }
  }, [optionsState.options, blogPostsState]);

  const renderDescription = (content: string): string => {
    return content.slice(0, 50) + (content.length > 50 ? "..." : "");
  };

  const handleClickDelete = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/blog_post_details/${id}/`);
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  function handleClickUpdate(id: number) {
    navigate(`/UpdatePost/${id}/`);
  }

  function handleClickTitle(id: number) {
    navigate(`/DetailsPost/${id}/`);
  }

  return (
    <List
      className="demo-loadmore-list"
      loading={false}
      itemLayout="horizontal"
      dataSource={posts}
      style={{ paddingLeft: "2vw", paddingRight: "2vw" }}
      renderItem={(item) => (
        <List.Item
          actions={
            optionsState.options
              ? [
                  <a
                    key="list-loadmore-edit"
                    onClick={() => handleClickUpdate(item.id)}
                  >
                    Edit
                  </a>,
                  <a
                    key="list-loadmore-more"
                    onClick={() => handleClickDelete(item.id)}
                  >
                    Delete
                  </a>,
                ]
              : undefined
          }
        >
          <Skeleton avatar title={false} loading={false} active>
            <List.Item.Meta
              title={
                <a onClick={() => handleClickTitle(item.id)}>{item.title}</a>
              }
              description={renderDescription(item.content)}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default ListPost;
