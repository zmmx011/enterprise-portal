import {useKeycloak} from '@react-keycloak/web'

import {useCallback} from "react";

export type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export default function ProtectedRoute({outlet}: ProtectedRouteProps) {
  const {keycloak} = useKeycloak()

  const login = useCallback(() => {
    keycloak.login({ redirectUri: process.env.BASE_URL })
  }, [keycloak])

  if (!keycloak.authenticated) {
    console.log("로그인 여부 : " + keycloak.authenticated)
    login();
  }

  return outlet;
};