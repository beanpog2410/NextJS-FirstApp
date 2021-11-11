const postItemStyle = (theme) => ({
    root: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    title: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        fontWeight: "bold",
    },
    subheader: {
        float: 'right',
        marginBottom: theme.spacing(3),
    },
    image: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    text: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center'
    }
  });
  
  export default postItemStyle;