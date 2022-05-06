import { ThemeProvider } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import theme from "../landing/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
