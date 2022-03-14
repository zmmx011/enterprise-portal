import {ReactKeycloakProvider} from '@react-keycloak/web'
import React from "react";
import keycloak from "keycloak";
import Router from "routes/Router";
import {LoadingBalls} from "components/LoadingBalls"

function App() {
  const eventLogger = (event: unknown, error: unknown) => {
    console.log('onKeycloakEvent', event, error)
  }

  const tokenLogger = (tokens: unknown) => {
    console.log('onKeycloakTokens', tokens)
  }

  return (
      <ReactKeycloakProvider
          authClient={keycloak}
          onEvent={eventLogger}
          onTokens={tokenLogger}
          LoadingComponent={<LoadingBalls/>}
          initOptions={{
            onLoad: "login-required",
          }}
      >
        <Router/>
      </ReactKeycloakProvider>
  )
}

export default App;
