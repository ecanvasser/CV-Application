import { Component } from "react";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <form id="name">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.props.handleChange}
            value={this.props.name}
          />
        </form>
        <form>
          <input
            id="role-edit"
            name="role"
            type="text"
            placeholder="Current title"
            onChange={this.props.handleChange}
            value={this.props.role}
          />
        </form>
        <form id="contact">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={this.props.handleChange}
              value={this.props.email}
            />
            <input
              id="phone"
              name="phone"
              type="phone"
              placeholder="Phone"
              onChange={this.props.handleChange}
              value={this.props.phone}
            />
            <input
              id="location"
              name="location"
              type="text"
              placeholder="City, State"
              onChange={this.props.handleChange}
              value={this.props.location}
            />
          </form>
      </>
    );
  }
}

export default GeneralForm;
