import React from "react";
import Container from "./Container";
import NavBar from "./NavBar";
const App: React.FC = () => {
  return (
    <div className="main">
      <NavBar />
      <Container />
    </div>
  );
};

export default App;
