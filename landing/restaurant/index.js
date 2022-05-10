/* eslint-disable @next/next/no-img-element */
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";

import { RESTAURANTS } from "../home/constants";

const useStyles = makeStyles((theme) => ({
  header: {
    height: 600,
    "& > img": {
      width: "100%",
      height: "100%",
    },
  },
  title: {
    color: "#565656",
    fontSize: 40,
    fontWeight: 600,
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.down("md")]: {
    header: {
      height: 400,
    },
    title: {
      fontSize: 35,
    },
  },
}));

const RestaurantProfile = () => {
  const classes = useStyles();
  const router = useRouter();

  const restaurant = RESTAURANTS.find(
    (restaurant) => restaurant.id === Number(router.query.restaurantId)
  );

  if (!restaurant) {
    return;
  }

  return (
    <Grid container>
      <Grid container className={classes.header}>
        <img src={restaurant.profilePicture} alt="profile" />
      </Grid>
      <Grid container justifyContent="center">
        <Typography className={classes.title}>{restaurant.name}</Typography>
      </Grid>
    </Grid>
  );
};

export default RestaurantProfile;
