import { Grid } from "@mui/material";
import NavBar from "../landing/NavBar";
import AboutUs from "../landing/AboutUs";
import Categories from "../landing/Categories";
import ContactUs from "../landing/ContactUs";

const Home = () => {
  return (
    <Grid container>
      <NavBar />
      <AboutUs />
      <Categories />
      <ContactUs />
    </Grid>
  );
};

export default Home;
