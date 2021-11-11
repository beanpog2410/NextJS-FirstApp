import {
  AppBar,
  Box,
  Container,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import PostList from "../../component/page/Posts/PostList";
import style from "../../styles/jss/page/postsStyle";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyle = makeStyles(style);

export default function Posts() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const classes = useStyle();
  const posts = useSelector((state) => state.posts.posts);
  const recruitments = useSelector((state) => state.recruitments.recruitments);

  const TTpost = posts.filter((item) => item.type == "tin tuc");
  const TBpost = posts.filter((item) => item.type == "thong bao");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="enrollment tab"
        >
          <Tab label="Tin tức" {...a11yProps(0)} />
          <Tab label="Thông báo" {...a11yProps(1)} />
          <Tab label="Tuyển dụng" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PostList posts={TTpost} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <PostList posts={TBpost} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <PostList posts={recruitments} addtionPath="recruitment" />
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
}
