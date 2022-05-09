import { Grid } from "@mui/material";

import NavBar from "../../landing/home/NavBar";
import Restaurants from "../../landing/restaurants";

const RestaurantsPage = () => {
  return (
    <Grid container>
      <NavBar />
      <Restaurants />
    </Grid>
  );
};

export default RestaurantsPage;
