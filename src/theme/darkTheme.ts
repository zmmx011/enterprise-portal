import { createTheme } from "@mui/material/styles";

// A custom lightTheme for this app
const darkTheme = createTheme({
  spacing: 10,
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Roboto", "Nanum Gothic", "Arial", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
});

export default darkTheme;
