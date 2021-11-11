import style from "../../../styles/jss/component/recruitmentCarouselStyle";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { useRouter } from "next/router";

const useStyle = makeStyles(style);

const transitionProps = "transform 400ms ease-in-out";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 900, min: 400 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
  },
};

export default function RecruitmentCarousel() {
  const newestRecruitments = useSelector(
    (state) => state.recruitments.newestRecruitments
  );
  const router = useRouter();

  const toPath = (path) => {
    router.push(path);
  };
  const classes = useStyle();

  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      autoPlay={true}
      ssr={true}
      infinite={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      draggable={true}
      customTransition={transitionProps}
      className={classes.root}
    >
      {newestRecruitments.map((item) => {
        return (
          <div key={item.id}>
            <Card className={classes.card}>
              <CardActionArea
                onClick={() => {
                  toPath("/post/recruitment/" + item.id);
                }}
              >
                <div>
                  <Image
                    src={
                      item.imageCompany
                        ? item.imageCompany
                        : "/image/recruitments/tuyendung.png"
                    }
                    alt={item.company}
                    width={300}
                    height={200}
                  ></Image>
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    className={classes.title}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
    </Carousel>
  );
}
