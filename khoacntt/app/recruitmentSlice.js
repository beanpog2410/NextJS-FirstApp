import { createSlice } from "@reduxjs/toolkit";
import { recruitments } from "../db";


export const recruimentSlice = createSlice({
    name: 'recruiment',
    initialState: {
      recruitments: [],
      newestRecruitments: [],
      recruitmentsByPage: [],
    },
    reducers: {
      setRecruitments: (state, action) => {
        //sắp xếp theo ngày
        let newArr = [...recruitments];
        newArr.sort((a, b) => {return new Date(b.date) - new Date(a.date)});
        
        state.recruitments = [...newArr];
      },
      setNewestRecruitment: (state, action) => {
        //Lấy 8 tin tuyển dụng mới nhất.
        const newRecruitmentQuantity = 8;
        let recruitments = [...state.recruitments];
        let newRecruitments = recruitments.slice(0, newRecruitmentQuantity);
        
        state.newestRecruitments = [...newRecruitments];
      },
      setRecruitmentsByPage: (state, action) => {
        //Giả phân trang
        const list = [...state.recruiments];
        const itemPerPage = 10;
        let result = [];
        for (let i = 0; i < list.length; i += itemPerPage) {
          result.push(list.slice(i, i + itemPerPage));
        }
        state.recruitmentsByPage = [...result];
      },
    },
  })

export const { setRecruitments, setNewestRecruitment, setRecruitmentsByPage } = recruimentSlice.actions;


export default recruimentSlice.reducer;