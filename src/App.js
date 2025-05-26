import React from "react";
import "./App.css";
import AppBody from "./modules/main/AppBody";
import AppFooter from "./modules/main/AppFooter";
import AppHeader from "./modules/main/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;
