import { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div id="header-title">CV App</div>
        <div id="header-links">
          <button onClick={() => this.props.changeEdit()}>Edit</button>
          <button onClick={() => this.props.changePreview()}>Preview</button>
        </div>
      </header>
    );
  }
}

export default Header;
