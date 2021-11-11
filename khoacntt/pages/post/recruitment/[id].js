import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/vi";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import dynamic from "next/dynamic";
import style from "../../../styles/jss/page/postItemStyle";
import NewestList from "../../../component/page/Posts/NewestList";

const PDFViewer = dynamic(() => import("../../../component/PDFViewer"), {
  ssr: false,
});

const useStyle = makeStyles(style);

const Recruitment = () => {
  const router = useRouter();
  const classes = useStyle();
  const { id } = router.query;

  const recruitments = useSelector((state) => state.recruitments.recruitments);
  let recruitment = recruitments.filter((item) => item.id == id)[0];

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <Card>
            <CardHeader
              title={recruitment.title}
              subheader={moment(recruitment.date, "YYYY-MM-DD").format("ll")}
              classes={{
                title: classes.title,
                subheader: classes.subheader,
              }}
            ></CardHeader>
            <Divider />
            <CardContent className={classes.content}>
              {recruitment.image ? (
                <Image
                  src={recruitment.image}
                  width="600"
                  height="400"
                  className={classes.image}
                ></Image>
              ) : null}
              {recruitment.content ? (
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.text}
                >
                  {recruitment.content}
                </Typography>
              ) : null}
              {recruitment.textFile ? (
                <PDFViewer
                  filePath={recruitment.textFile}
                  post={true}
                ></PDFViewer>
              ) : null}
            </CardContent>
          </Card>
        </Grid>
        <Hidden smDown>
          <Grid item sm={4}>
            <NewestList />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

export default Recruitment;
