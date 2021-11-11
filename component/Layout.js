import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setNewestPosts, setPosts } from "../app/postSlice";
import { setNewestRecruitment, setRecruitments } from "../app/recruitmentSlice";
import { useEffect } from 'react';

export default function Layout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosts());
    dispatch(setNewestPosts());
    dispatch(setRecruitments());
    dispatch(setNewestRecruitment());
  }, [])
    

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="Tuyển sinh, Công nghệ thông tin, Đại học Mở TP.HCM"
        />
        <title>Khoa CNTT Đại học Mở TP.HCM</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
