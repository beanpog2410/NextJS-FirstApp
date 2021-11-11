const recruitmentCarouselStyle = (theme) => ({
    root: {
        marginBottom: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        alignItem: 'stretch'
    },
    card: {
        backgroundColor: '#eeeeee',
        '&:hover': {
            backgroundColor: '#e0e0e0'
        },
        padding: theme.spacing(3),
        margin: theme.spacing(3),
    },
    title: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    }
  });
  
  export default recruitmentCarouselStyle;