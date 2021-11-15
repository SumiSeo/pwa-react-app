import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
const searchIcon = <FontAwesomeIcon icon={faSearch} />;
console.log(searchIcon);
console.log(typeof searchIcon);

const NavBar: React.FC = () => {
  return (
    <div>
      <nav>
        <div className="nav__link">
          <FontAwesomeIcon className="nav__icon" icon={faHandHoldingUsd} />
          <h2 className="nav__logo">Meddler</h2>
        </div>
        <div className="nav__link">
          <input className="nav__input" type="text" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
