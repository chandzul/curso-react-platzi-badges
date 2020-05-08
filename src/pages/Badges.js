import React from "react";

import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
// import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {

  constructor(props) {
    super(props);
    console.log('1. constructor()');
    this.state = {
      data: [

      ],
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    setTimeout(() => {
      this.setState({
        data: 
      });
    });
  }

  render() {

    console.log('2. render()');

    return (
      <React.Fragment>

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />

            {/* <ul className="list-unstyled">
              {this.state.data.map((badge) => {
                return (
                  <li key={badge.id}>
                    <p>
                      {badge.firstName} {badge.lastName}
                    </p>
                  </li>
                );
              })}
            </ul> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
