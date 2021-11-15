import React from "react";
import Container from "./Container";
import NavBar from "./NavBar";


const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <NavBar />
        <Container />
      </div>
    </div>
  );
};

export default App;
