import { Component } from "react";
import '../styles/Preview.css'

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div id="preview">
      <div id="name">{this.props.data.name}</div>
      <div id="contact-prev">
        <div id="email">{this.props.data.email}</div>
        <div id="phone">{this.props.data.phone}</div>
        <div id="location">{this.props.data.location}</div>
      </div>
      <div id="name-divider"></div>
    </div>);
  }
}

export default Preview;
