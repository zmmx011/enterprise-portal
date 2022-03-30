import { createTheme } from "@mui/material/styles";

// A custom lightTheme for this app
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#31302e",
    },
    secondary: {
      main: "#f58220",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Roboto", "Nanum Gothic", "Arial", "sans-serif"].join(","),
  },
});

export default lightTheme;
