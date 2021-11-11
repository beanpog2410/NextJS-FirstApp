import { Card, CardActionArea, CardContent, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import Image from 'next/image';
import moment from "moment";
import "moment/locale/vi";
import { useRouter } from "next/router";
import style from '../../../styles/jss/component/postItemStyle';
import { useState } from 'react';
import { Pagination } from '@material-ui/lab';

const useStyle = makeStyles(style);

export default function PostList({posts, addtionPath}) {
    const router = useRouter();
    const classes = useStyle();
    const [page, setPage] = useState(1);
    const itemPerPage = 10;
    var count = 0;
    

    const handleChange = (event, value) => {
      setPage(value);
    };
    

    const toPath = (path) => {
        router.push(path);
      };
    
    let postByPage = [];
    for (let i = 0; i < posts.length; i += itemPerPage) {
      postByPage.push(posts.slice(i, i + itemPerPage));
    }

    if (!postByPage[page-1]) {
      return <></>;
    }

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
        {postByPage[page-1].map((post) => {
          count++;
          return (
            <Grid item xs={12} sm={count < 4 ? 4 : (count < 8) ? 3 : 12} key={post.id}>
              <Card className={classes.root}>
                <CardActionArea
                  onClick={() => {
                    toPath("/post/" + (addtionPath ? addtionPath + "/" : "") + post.id);
                  }}
                >
                  <Grid container>
                    <Hidden smDown>
                      <Grid item md={4} className={classes.image}>
                          {post.image ? <Image src={post.image} width="400" height="300" /> : <Image src='/image/default.png' width="400" height="300" />}
                        
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
        <Grid item xs={12} >
        <Pagination
            count={postByPage.length}
            page={page}
            onChange={handleChange}
            classes={{
                root: classes.pagination, 
                ul: classes.ul,
              }}
          />
        </Grid>
      </Grid>
    );
}