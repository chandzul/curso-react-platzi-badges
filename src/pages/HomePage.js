import React from "react";

import "./styles/Home.css"
import Astronauts from "../images/astronauts.svg";
import PlatziConf from "../images/platziconf-logo.svg";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="Home__col">
            <div className="item">
              <img src={PlatziConf} alt="" />
              <a href="#" className="btn btn-primary">Agregar</a>
            </div>
            <div className="item">
              <img src={Astronauts} alt="" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomePage;