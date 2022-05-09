import { Grid } from "@mui/material";
import NavBar from "../landing/home/NavBar";
import AboutUs from "../landing/home/AboutUs";
import Categories from "../landing/home/Categories";
import ContactUs from "../landing/home/ContactUs";

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
