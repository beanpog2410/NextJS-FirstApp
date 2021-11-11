const titleDivinerStyle = (theme) => ({
    root: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    title: {
        textTransform: "upperCase",
        padding: theme.spacing(2),
        borderRadius: '5px',
        whiteSpace: 'noWrap',
    },
    line: {
        width: '100%',
        borderBottom: '3px solid #ffd95b',
    },
})

export default titleDivinerStyle;