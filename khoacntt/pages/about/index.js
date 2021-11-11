import {
  Container,
  Divider,
  Grid,
  ImageList,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import LecturerCarousel from "../../component/page/About/LecturerCarousel";
import style from "../../styles/jss/page/aboutStyle";
import TitleDiviner from "../../component/page/Home/TitleDiviner";
import { partner } from "../../db";
import Image from "next/dist/client/image";

const useStyle = makeStyles(style);

export default function About() {
  const classes = useStyle();

  let date = new Date();

  return (
    <Container className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Khoa công nghệ thông tin
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.fact}
      >
        <Grid item xs={6} md={3}>
          <Typography variant="h4" className={classes.factItem}>
            <span className={classes.factText}>
              {date.getFullYear() - 1990}
            </span>
            <br />
            năm
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" className={classes.factItem}>
            <span className={classes.factText}>5000+</span>
            <br /> cử nhân
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" className={classes.factItem}>
            <span className={classes.factText}>5</span> <br />
            Chương trình đào tạo
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" className={classes.factItem}>
            <span className={classes.factText}>90%</span>
            <br />
            có việc làm sau ra trường
          </Typography>
        </Grid>
      </Grid>
      <TitleDiviner title="Danh sách giảng viên" />
      <LecturerCarousel />
      <TitleDiviner title="Đối tác doanh nghiệp" />
      <Grid container justifyContent='center' >
        {partner.map((item) => {
          return (
            <Grid item key={item.id} xs={3} className={classes.partnerImage}>
              <Tooltip title={item.name}>
                <Image src={item.image} alt={item.name} width={300} height={200} />
              </Tooltip>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
