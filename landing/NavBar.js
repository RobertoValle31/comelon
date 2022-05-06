import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

const useStyles = makeStyles(() => ({
  container: {
    background: "#b8635b",
    height: 60,
    padding: "0px 20px",
    position: "fixed",
  },
  icon: {
    fontSize: "40px",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      className={classes.container}
    >
      <Image
        src="/images/logo/Comelon_logo.png"
        alt="comelon"
        width="100%"
        height="50"
      />
      <SearchIcon className={classes.icon} />
    </Grid>
  );
};

export default NavBar;
