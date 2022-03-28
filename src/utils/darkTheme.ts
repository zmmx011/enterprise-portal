import { createTheme } from "@mui/material/styles";

// A custom lightTheme for this app
const darkTheme = createTheme({
  palette: {
    mode: "dark",
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

export default darkTheme;
