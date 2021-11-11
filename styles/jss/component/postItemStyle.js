const postItemStyle = (theme) => ({
  root: {
    backgroundColor: "#eeeeee",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
  title: {
    marginBottom: theme.spacing(5),
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
  image: {
    marginTop: theme.spacing(4),
    paddingLeft: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(1),
  },
  text: {
    marginTop: theme.spacing(4),
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  time: {
    float: "right",
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  btn: {
    float: "right",
    marginTop: theme.spacing(3),
  },
  pagination: {
    marginTop: theme.spacing(3),
  },
  ul: {
    justifyContent: "center",
  },
});

export default postItemStyle;
