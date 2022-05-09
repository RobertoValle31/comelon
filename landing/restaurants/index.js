/* eslint-disable @next/next/no-img-element */
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";

import Card from "../restaurants/Card";
import { RESTAURANTS } from "../home/constants";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#363d3a",
    // Todo: Check this height
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      marginTop: 60,
    },
  },
  header: {
    color: "white",
    fontSize: 35,
    fontWeight: 500,
  },
  cardsContainer: {
    [theme.breakpoints.down("md")]: {
      padding: 15,
    },
  },
}));

// TODO: Add filters
// Todo: Add No restaurant message
const Restaurants = () => {
  const classes = useStyles();
  const router = useRouter();

  const filteredCategories = RESTAURANTS.filter(
    (restaurant) => restaurant.category === router.query.category
  );
  return (
    <Grid className={classes.container}>
      <Typography className={classes.header}>Especiales Del Día</Typography>
      <Grid
        container
        justifyContent="center"
        className={classes.cardsContainer}
      >
        {filteredCategories.map((restaurant) => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Restaurants;
