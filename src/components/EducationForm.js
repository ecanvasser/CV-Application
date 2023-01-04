import { Component } from "react";
import '../styles/EducationForm.css'

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="edu-title-edit">Education</div>
        <form id="education">
          <input
            id="school"
            name="school"
            type="text"
            placeholder="Organization"
            onChange={this.props.handleChange}
            value={this.props.school}
          />
          <input
            id="degree"
            name="degree"
            type="text"
            placeholder="Degree/Major"
            onChange={this.props.handleChange}
            value={this.props.degree}
          />
          <input
            id="startend"
            name="duration"
            type="text"
            placeholder="Start year - End Year"
            onChange={this.props.handleChange}
            value={this.props.duration}
          />
        </form>
      </>
    );
  }
}

export default EducationForm;
