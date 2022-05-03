import { Grid } from "@mui/material";
import NavBar from "../landing/NavBar";
import AboutUs from "../landing/AboutUs";

const Home = () => {
  return (
    <Grid container>
      <NavBar />
      <AboutUs />
    </Grid>
  );
};

export default Home;
