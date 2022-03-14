import {ReactKeycloakProvider} from '@react-keycloak/web'
import React from "react";
import keycloak from "keycloak";
import Router from "routes/Router";
import Loading from "components/LoadingBalls"

function App() {
  const handleOnKeycloakEvent = async (event: unknown, error: unknown) => {
    console.log('event:', event);
    console.log('error:', error);
  };

  return (
      <ReactKeycloakProvider
          authClient={keycloak}
          onEvent={(event, error) => handleOnKeycloakEvent(event, error)}
          LoadingComponent={<Loading/>}
          initOptions={{
            onLoad: "login-required",
          }}
      >
        <Router/>
      </ReactKeycloakProvider>
  )
}

export default App;
