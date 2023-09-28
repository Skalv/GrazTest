import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Wallet from "./components/wallet";

export default function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Graz</h1>
      <div className="card">
        <Wallet />
      </div>
    </>
  );
}
