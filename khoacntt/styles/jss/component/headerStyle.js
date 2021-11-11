const headerStyle = (theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: "#00acc1",
  },
  logo: {
    width: "75%",
    height: "auto",
    backgroundColor: "inherit",
    cursor: 'pointer',
  },
  search: {
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#eeffff",
      color: 'black',
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      width: "40%",
      display: 'block',
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },
    display: "none",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  nav: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up("md")]: {
      display: 'flex',
    },
  },
  navLink: {
    whiteSpace: 'nowrap',
    fontSize: '0.9em',
    marginRight: theme.spacing(3),  
    '&:hover': {
      backgroundColor: "#67daff",
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    }
  },
  drawerItem: {
  },
  mobileSection: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktopSection: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
});

export default headerStyle;
