const aboutStyle = (theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    textAlign: "center",
  },
  title: {
    textTransform: "upperCase",
    fontWeight: "bold",
    background: "linear-gradient(to right bottom, #007ac1, #67daff, #03a9f4)",
    padding: theme.spacing(3),
    color: '#eceff1'
  },
  fact: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
  },
  factItem: {
    fontWeight: 'bold',
    padding: theme.spacing(2)
  },
  factText: {
    fontSize: '4rem'
  },
  partnerImage: {
    padding: theme.spacing(3)
  }
});

export default aboutStyle;
