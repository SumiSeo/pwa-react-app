import React from "react";

const NavBar: React.FC = () => {
  return (
    <div>
      <nav>
        <div className="nav__link">
          <h2>Meddler</h2>
        </div>
        <div className="nav__link">
          <input type="text" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
