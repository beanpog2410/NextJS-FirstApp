import {
  AppBar,
  Box,
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@material-ui/core";
import style from "../../styles/jss/page/enrollmentStyle";
import { enrollments } from "../../db";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const PDFViewer = dynamic(() => import("../../component/PDFViewer"), {
  ssr: false,
});

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

const useStyles = makeStyles(style);

export default function Enrollment() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

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
          <Tab label={enrollments[0].title} {...a11yProps(0)} />
          <Tab label={enrollments[1].title} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography variant="h3" className={classes.title}>
            {enrollments[0].title}
          </Typography>
          {enrollments[0].content ? (
            <Typography variant="h6" className={classes.text}>
              {enrollments[0].content}
            </Typography>
          ) : null}
          {enrollments[0].image ? (
            <Grid container justifyContent="center">
              <Grid item>
                <Image
                  src={enrollments[0].image}
                  width="600"
                  height="400"
                  className={classes.image}
                />
              </Grid>
            </Grid>
          ) : null}
          <PDFViewer filePath={enrollments[0].file} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography variant="h3" className={classes.title}>
            {enrollments[1].title}
          </Typography>
          {enrollments[1].content ? (
            <Typography variant="h6" className={classes.text}>
              {enrollments[1].content}
            </Typography>
          ) : null}
          {enrollments[1].image ? (
            <Grid container justifyContent="center">
              <Grid item>
                <Image
                  src={enrollments[1].image}
                  width="600"
                  height="400"
                  className={classes.image}
                />
              </Grid>
            </Grid>
          ) : null}
          <PDFViewer filePath={enrollments[1].file} post={false} />
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
}
