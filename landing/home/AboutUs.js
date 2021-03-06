/* eslint-disable @next/next/no-img-element */
import { Grid, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#363d3a",
  },
  container: {
    background: "#363d3a",
    height: 600,
    padding: "0px 20px",
    display: "flex",
  },
  icon: {
    fontSize: "40px",
  },
  //Todo: Make this a small component
  header: {
    color: "white",
    fontSize: 40,
  },
  description: {
    color: "white",
    fontSize: 20,
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: "50%",
  },
  [theme.breakpoints.down("md")]: {
    image: {
      width: "200px !important",
      height: "200px !important",
    },
    container: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Container maxWidth="xl" className={classes.container}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          wrap="nowrap"
          direction="column"
          item
          md={6}
        >
          <Grid container direction="column">
            <h3 className={classes.header}>Quienes Somos?</h3>
          </Grid>
          <Typography className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </Typography>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" item md={6}>
          <img
            src="/images/logo/Comelon_about_logo.png"
            alt="comelon"
            className={classes.image}
          />
        </Grid>
      </Container>
    </Grid>
  );
};

export default AboutUs;
