import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-b8gm715f23wf6awn.us.auth0.com
//1Co9Nnw0XBYPiq4lERLXVKoydXtHPBMY

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-b8gm715f23wf6awn.us.auth0.com"
      clientId="1Co9Nnw0XBYPiq4lERLXVKoydXtHPBMY"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);
