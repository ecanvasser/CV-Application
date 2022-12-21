import { Component } from "react";
import "../styles/Document.css";

class Document extends Component {
  render() {
    return (
      <div id="document">
        <form id="name">
          <input type="text" placeholder="Name" />
        </form>
      </div>
    );
  }
}

export default Document;
