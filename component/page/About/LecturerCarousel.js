import style from "../../../styles/jss/page/lecturerCarouselStyle";
import {
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { useRouter } from "next/router";
import { lecturers } from "../../../db";
import { useState } from "react";
import dynamic from "next/dynamic";
import { setCurrentLecturer } from "../../../app/lecturerSlice";

const DynamicPDFDialog = dynamic(() => import("../../PDFDialog"));

const useStyle = makeStyles(style);

const transitionProps = "transform 400ms ease-in-out";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 3,
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

const CustomImage = (src, alt) => {
  return <Image src={src} alt={alt} width={280} height={350} />;
};

export default function LecturerCarousel() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setOpen] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setLec = (lec) => {
    dispatch(setCurrentLecturer(lec));
  };

  const classes = useStyle();

  return (
    <>
      <Carousel
        responsive={responsive}
        showDots={false}
        autoPlay={true}
        ssr={true}
        infinite={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "desktop"]}
        itemClass="carousel-item-padding-40-px"
        draggable={true}
        customTransition={transitionProps}
        className={classes.root}
      >
        {lecturers.map((item) => {
          return (
            <div key={item.id}>
              <Card>
                <CardMedia
                  component={() => {
                    return CustomImage(item.image, item.name);
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {item.degrees + "." + item.name}
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    Email:{" "}
                    <a
                      href={"mailto:" + item.email}
                      style={{ color: "#f44336" }}
                    >
                      {item.email}
                    </a>
                  </Typography>
                  <ButtonBase
                    primary
                    onClick={() => {
                      setLec(item);
                      handleClickOpen();
                    }}
                  >
                    Lý lịch khoa học
                  </ButtonBase>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Carousel>
      <DynamicPDFDialog open={open} handleClose={handleClose} />
    </>
  );
}
