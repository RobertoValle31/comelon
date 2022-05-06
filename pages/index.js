import { Grid } from "@mui/material";
import NavBar from "../landing/NavBar";
import AboutUs from "../landing/AboutUs";
import Categories from "../landing/Categories";

const Home = () => {
  return (
    <Grid container>
      <NavBar />
      <AboutUs />
      <Categories />
    </Grid>
  );
};

export default Home;
