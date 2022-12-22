import { Component } from "react";
import Preview from "./Preview";
import "../styles/Document.css";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      location: ""
    };

    this.nameChange = this.nameChange.bind(this);
  }

  nameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    if (this.props.preview === false) {
      return (
        <div id="document">
          <form id="name">
            <input
              type="text"
              placeholder="Name"
              onChange={this.nameChange}
              value={this.state.name}
            />
          </form>
          <form id="contact">
            <input
              id="email" 
              type="email"
              placeholder="Email"
              onChange={(e) => this.setState({email: e.target.value})}
              value={this.state.email}
            />
            <input
              id="phone"
              type="phone"
              placeholder="Phone"
              onChange={(e) => this.setState({phone: e.target.value})}
              value={this.state.phone}
            />
            <input
              id="location"
              type="text"
              placeholder="City, State"
              onChange={(e) => this.setState({location: e.target.value})}
              value={this.state.location}
            />
          </form>
        </div>
      );
    }
    return (
      <div id="document">
        <Preview data={this.state} />
      </div>
    );
  }
}

export default Document;
