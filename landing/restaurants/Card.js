/* eslint-disable @next/next/no-img-element */
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  //Todo: Check animation
  card: {
    background: "white",
    height: 300,
    width: 900,
    borderRadius: 5,
    overflow: "hidden",
    cursor: "pointer",
    margin: theme.spacing(2),
    "font-smoothing": "antialiased !important", // Smooth scaling.
    "-webkit-transform-style": "preserve-3d", // Smooth scaling.
    "-webkit-backface-visibility": "hidden", // Smooth scaling.
    "-moz-backface-visibility": "hidden", // Smooth scaling.
    "-ms-backface-visibility": "hidden", // Smooth scaling.
    "&:hover": {
      boxShadow: "0px 4px 12px 0 rgba(0,0,0,0.16)",
      transform: "translateZ(0) scale(1.02, 1.02)",
    },

    [theme.breakpoints.down("md")]: {
      width: 425,
      height: 425,
    },
  },
  imageContainer: {
    overflow: "hidden",
    "& > img": {
      width: "100%",
      height: 300,
    },
  },
  contentContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      justifyContent: "center",
      display: "flex",
    },
  },
  headerContainer: {
    marginBottom: theme.spacing(3),
    //
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    },
  },
  cardTitle: {
    color: "#565656",
    fontSize: 30,
    fontWeight: 500,
  },
  cardSubTitle: {
    color: "#7c7c7c",
    fontSize: 18,
  },
  descriptionContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  divider: {
    background: "green",
    width: 30,
    height: 1.5,
  },
}));

const Card = ({ restaurant }) => {
  const classes = useStyles();

  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <Grid container className={classes.card}>
        <Grid container item md={5} className={classes.imageContainer}>
          <img src={restaurant.profilePicture} alt="Restaurant" />
        </Grid>
        <Grid item md={7} className={classes.contentContainer}>
          <Grid className={classes.headerContainer}>
            <Typography className={classes.cardTitle}>
              {restaurant.name}
            </Typography>
            <Typography className={classes.cardSubTitle}>
              {restaurant.town}
            </Typography>
            <div className={classes.divider} />
          </Grid>
          <Grid container className={classes.descriptionContainer}>
            {restaurant.description}
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};

export default Card;
