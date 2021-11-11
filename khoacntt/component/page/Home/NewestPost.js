import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import Image from "next/image";
import style from "../../../styles/jss/component/postItemStyle";
import moment from "moment";
import "moment/locale/vi";
import { useRouter } from "next/router";

const useStyle = makeStyles(style);

export default function NewestPost() {
  const newestPost = useSelector((state) => state.posts.newestPosts);
  const classes = useStyle();
  const router = useRouter();

  const toPath = (path) => {
    router.push(path);
  };

  const renderNewestPost = () => {
    var count = 0;
    return (
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        {newestPost.map((post) => {
          count++;
          return (
            <Grid item xs={12} sm={count < 3 ? 6 : 4} key={post.id}>
              <Card className={classes.root}>
                <CardActionArea
                  onClick={() => {
                    toPath("/post/" + post.id);
                  }}
                >
                  <Grid container>
                    <Hidden smDown>
                      <Grid item md={4} className={classes.image}>
                        <Image src={post.image} width="400" height="300" />
                      </Grid>
                    </Hidden>
                    <Grid item xs={12} md={8} className={classes.content}>
                      <CardContent>
                        <Typography variant="h6" className={classes.title}>
                          {post.title}
                        </Typography>
                        <Typography variant="body1" className={classes.text}>
                          {post.content}
                        </Typography>
                        <Typography variant="caption" className={classes.time}>
                          {moment(post.date, "YYYY-MM-DD").fromNow()}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
    <>
      {renderNewestPost()}
      <Button className={classes.btn}
        onClick={() => {
          toPath("/post");
        }}
      >
        Xem thêm {'>>'}
      </Button>
    </>
  );
}
