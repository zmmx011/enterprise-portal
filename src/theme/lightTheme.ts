import { createTheme } from "@mui/material/styles";

// A custom lightTheme for this app
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#31302e"
    },
    secondary: {
      main: "#f58220",
      contrastText: "#ffffff"
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Noto Sans KR',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default lightTheme;
