import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#31302e',
    },
    secondary: {
      main: '#f58220',
      contrastText: '#ffffff',
    },
  },
});

export default theme;
