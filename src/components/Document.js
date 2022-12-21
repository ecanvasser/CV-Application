import { Component } from "react";
import Preview from "./Preview";
import "../styles/Document.css";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
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
              onChange={this.handleChange}
              value={this.state.name}
            />
          </form>
        </div>
      );
    }
    return (
      <div id="document">
        <Preview name={this.state.name} />
      </div>
    );
  }
}

export default Document;
