import { Container } from "@material-ui/core";
import Carousel from "../component/page/Home/Carousel";
import NewestPost from "../component/page/Home/NewestPost";
import RecruitmentCarousel from "../component/page/Home/RecruimentCarousel";
import TitleDiviner from "../component/page/Home/TitleDiviner";


export default function Home() {

  return (
    <Container>
      <Carousel />
      <TitleDiviner title='Tin tức mới nhất' />
      <NewestPost />
      <TitleDiviner title='Tuyển dụng' />
      <RecruitmentCarousel />
    </Container>
  );
}