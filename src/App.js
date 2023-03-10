import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { LanguageProvider } from "./components/LanguageContext/Language";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </LanguageProvider>
  );
}

export default App;
