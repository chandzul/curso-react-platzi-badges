import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <h1>lista de badges</h1>
        <ul className="list-unstyled ">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatar}
                  alt="Avatar"
                />

                <h4>
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
