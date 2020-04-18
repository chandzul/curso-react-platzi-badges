import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({
      value: e.target.value,
      name: e.target.name,
    });
  };

  handleClick = (e) => {
    console.log("Button was save");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Was Submit");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>
          <button
            // type="button"
            // onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
