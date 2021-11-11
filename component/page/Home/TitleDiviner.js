import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import styles from "../../../styles/jss/component/titleDivinerStyle";

const useStyle = makeStyles(styles);

export default function TitleDiviner({ title }) {
  const classes = useStyle();

  return (
    <Grid container alignItems="center" className={classes.root}>
    <Grid item xs>
      <div className={classes.line}></div>
    </Grid>
    <Grid item><Typography variant='h5' className={classes.title}>{title}</Typography></Grid>
    <Grid item xs>
      <div className={classes.line}></div>
    </Grid>
  </Grid>
  );
}
