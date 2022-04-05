import { ReactKeycloakProvider } from "@react-keycloak/web";
import React from "react";
import keycloak from "keycloak";
import Router from "routes/Router";
import { LoadingBalls } from "components/LoadingBalls";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeContextProvider } from "./theme/ColorModeContext";

function App() {
  const eventLogger = (event: unknown, error: unknown) => {
    console.debug("onKeycloakEvent", event, error);
  };

  const tokenLogger = (tokens: unknown) => {
    console.debug("onKeycloakTokens", tokens);
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
          onLoad: "login-required",
        }}
      >
        <Router />
      </ReactKeycloakProvider>
    </ColorModeContextProvider>
  );
}

export default App;
