import { createTheme } from "@mui/material/styles";

// A custom lightTheme for this app
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Roboto", "Nanum Gothic", "Arial", "sans-serif"].join(","),
  },
});

export default darkTheme;
