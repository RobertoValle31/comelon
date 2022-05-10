import { Grid } from "@mui/material";

import NavBar from "../../landing/home/NavBar";
import RestaurantProfile from "../../landing/restaurant";

const RestaurantPage = () => {
  return (
    <Grid container>
      <NavBar />
      <RestaurantProfile />
    </Grid>
  );
};

export default RestaurantPage;
