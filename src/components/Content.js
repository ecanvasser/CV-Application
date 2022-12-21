import { Component } from "react";
import Document from "./Document";
import "../styles/Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Document preview={this.props.preview} />
      </main>
    );
  }
}

export default Content;
