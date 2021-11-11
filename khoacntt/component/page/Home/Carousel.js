import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { events } from "../../../db";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from 'next/image';
import styles from '../../../styles/jss/component/carouselStyle';


const responsive = {
  all: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};

const transitionProps = "transform 400ms ease-in-out";

const useStyle = makeStyles((styles));

export default function OUCarousel() {
  const classes = useStyle();

  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      autoPlay={true}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop", "all"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      draggable={false}
      customTransition={transitionProps}
      className={classes.root}
    >
     { events.map(item => { return (
       <div key={item.id}>
          <Grid container justifyContent="center" alignItems="center" >
            <Grid item xs={12} md={4} className={classes.itemLeft}>
                <Typography variant="h4" className={classes.title}>
                    {item.title}
                </Typography>
                <Typography variant="h6" className={classes.desc}>
                  {item.desc}
                </Typography>
            </Grid>
            <Grid item xs={12} md={8} >
                <Image src={item.image} alt={item.title} height={200} width={500} layout='responsive' className={classes.itemRight} />
            </Grid>
        </Grid>
       </div>
     ); }) }
    </Carousel>
  );
}