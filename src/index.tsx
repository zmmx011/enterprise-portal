import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./locales/i18n";
import App from "App";
import lightTheme from "utils/lightTheme";
import reportWebVitals from "reportWebVitals";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
