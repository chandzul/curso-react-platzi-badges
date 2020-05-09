import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No se encontro ningun Badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Crear Badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <h1>lista de badges</h1>
        <ul className="list-unstyled ">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatarUrl}
                  alt="Avatar"
                />

                <h4 className="Badge__name">
                  {badge.firstName} {badge.lastName}
                </h4>
                <br />
                <p>{badge.email}</p>
                <br />
                <p className="text-primary"> @{badge.twitter}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
