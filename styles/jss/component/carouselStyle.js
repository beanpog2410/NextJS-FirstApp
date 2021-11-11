const carouselStyle = (theme) => ({
    root: {
      marginTop: theme.spacing(6),
      alignItem: "center",
      background: "#e0e0e0",
      borderRadius: "5px"
    },
    itemLeft: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      display:"none",
      [theme.breakpoints.up("md")]: {
        display: "block"
      }
    },
    title: {
      textAlign: "center",
      textTransform: "upperCase"
    },
    desc: {
      marginTop: theme.spacing(3),
    },
    itemRight: {
      borderRadius: "5px",
    },
  });
  
  export default carouselStyle;
  