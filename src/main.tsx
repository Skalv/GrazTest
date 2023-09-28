import "./polyfills.ts";
import React from "react";
import ReactDOM from "react-dom/client";

import { GrazProvider } from "graz";
import { mainnetChains } from "graz/chains";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GrazProvider
      grazOptions={{
        defaultChain: mainnetChains.cosmoshub,
      }}
    >
      <App />
    </GrazProvider>
  </React.StrictMode>
);
