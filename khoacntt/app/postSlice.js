import { createSlice } from "@reduxjs/toolkit";
import { posts } from "../db";

export const postSlice = createSlice({
    name: 'post',
    initialState: {
      posts: [],
      newestPosts: [],
      postsByPage: [],
    },
    reducers: {
      setPosts: (state, action) => {
        //sắp xếp theo ngày
        let newPosts = [...posts];
        newPosts.sort((a, b) => {return new Date(b.date) - new Date(a.date)});
        
        state.posts = [...newPosts];
      },
      setNewestPosts: (state, action) => {
        //Lấy 5 post mới nhất.
        let posts = [...state.posts];
        let newPost = posts.slice(0,5);
        state.newestPosts = [...newPost];
      },
      setPostsByPage: (state, action) => {
        //Giả phân trang
        const list = [...state.posts];
        const itemPerPage = 10;
        let result = [];
        for (let i = 0; i < list.length; i += itemPerPage) {
          result.push(list.slice(i, i + itemPerPage));
        }
        state.postsByPage = [...result];
      }
    },
  })

export const { setPosts, setNewestPosts, setPostsByPage } = postSlice.actions;


export default postSlice.reducer;