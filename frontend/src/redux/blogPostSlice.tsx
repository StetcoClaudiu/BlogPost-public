import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogPost } from "../types/BlogPost";

interface BlogPostState {
  blogPosts: BlogPost[];
}

const initialState: BlogPostState = {
  blogPosts: [],
};

export const blogPostSlice = createSlice({
  name: "blogPost",
  initialState,
  reducers: {
    addBlogPost: (state, action: PayloadAction<BlogPost>) => {
      // Add only if it doesn't already exist
      const existingPost = state.blogPosts.find(
        (post) => post.id === action.payload.id
      );
      if (!existingPost) {
        state.blogPosts.push(action.payload);
      }
    },
    updateBlogPost: (state, action: PayloadAction<BlogPost>) => {
      // Update existing post or add it if not exists
      const index = state.blogPosts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.blogPosts[index] = action.payload;
      } else {
        state.blogPosts.push(action.payload);
      }
    },
    deleteBlogPost: (state, action: PayloadAction<number>) => {
      state.blogPosts = state.blogPosts.filter(
        (post) => post.id !== action.payload
      );
    },
    setBlogPosts: (state, action: PayloadAction<BlogPost[]>) => {
      state.blogPosts = action.payload;
    },
  },
});

export const { addBlogPost, updateBlogPost, deleteBlogPost, setBlogPosts } =
  blogPostSlice.actions;

export default blogPostSlice.reducer;
