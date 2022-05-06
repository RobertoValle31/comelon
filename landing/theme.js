// import { createMuiTheme } from "@mui/styles";
import { createTheme } from "@mui/material";

const theme = createTheme({
  props: {
    MuiPaper: {
      variant: "outlined",
    },
  },
  palette: {
    primary: {
      main: "#545CEA",
    },
    secondary: {
      main: "#00A3AD",
    },
    error: {
      main: "#FF5D47",
    },
    background: {
      default: "#FFF",
    },
  },
});

export default theme;
