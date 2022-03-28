import { ReactKeycloakProvider } from "@react-keycloak/web";
import React from "react";
import keycloak from "keycloak";
import Router from "routes/Router";
import { LoadingBalls } from "components/LoadingBalls";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./utils/lightTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeContext, ColorModeContextProvider } from "./utils/ColorModeContext";

function App() {
  const colorMode = React.useContext(ColorModeContext);

  const eventLogger = (event: unknown, error: unknown) => {
    console.log("onKeycloakEvent", event, error);
  };

  const tokenLogger = (tokens: unknown) => {
    console.log("onKeycloakTokens", tokens);
  };

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <ReactKeycloakProvider
        authClient={keycloak}
        onEvent={eventLogger}
        onTokens={tokenLogger}
        LoadingComponent={<LoadingBalls />}
        initOptions={{
          onLoad: "login-required"
        }}
      >
        <Router />
      </ReactKeycloakProvider>
    </ColorModeContextProvider>
  );
}

export default App;
