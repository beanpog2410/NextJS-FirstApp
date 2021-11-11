const PDFViewerStyle = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    page: {
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    },
    pagination: {
        marginTop: theme.spacing(3),
    },
    ul: {
        justifyContent: 'center'
    }
  });
  
  export default PDFViewerStyle;