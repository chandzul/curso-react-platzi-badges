import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = { form: {} };

  handleChange = (e) => {
    this.setState({
      form: {
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="David"
                lastName="Chandzul"
                avatarUrl="https://secure.gravatar.com/avatar/9a01546f13f3ac1f91dd46af99a7e800?s=128"
                jobTitle="Frontend Enginier"
                twitter="dchandzul"
              />
            </div>

            <div className="col-6">
              <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
