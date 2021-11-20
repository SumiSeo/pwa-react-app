import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppContainer from "./AppContainer";

const App: React.FC = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__container">
          <AppContainer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
