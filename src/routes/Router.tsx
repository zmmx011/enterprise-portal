import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {useKeycloak} from "@react-keycloak/web";
import ProtectedRoute from "routes/ProtectedRoute";

// pages
import Main from 'pages/Main';

export const RouterConfig = () => {
  const { initialized } = useKeycloak()

  if (!initialized) {
    return <div>Loading...</div>
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default RouterConfig;
