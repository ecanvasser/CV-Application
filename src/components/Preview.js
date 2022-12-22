import { Component } from "react";
import '../styles/Preview.css'

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div id="preview">
      <div id="name-prev">{this.props.data.name}</div>
      <div id="name-divider"></div>
      <div id="contact-prev">
        <div id="email">{this.props.data.email}</div>
        <div id="phone">{this.props.data.phone}</div>
        <div id="location">{this.props.data.location}</div>
      </div>
      <div id="name-divider"></div>
      <div id="edu-title">Education</div>
      <div id="edu-details">
        <div id="school">{this.props.data.education.school}</div>
        <div id="degree">{this.props.data.education.degree}</div>
        <div id="startend">{this.props.data.education.duration}</div>
      </div>
    </div>);
  }
}

export default Preview;
