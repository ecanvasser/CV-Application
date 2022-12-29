import { Component } from "react";
import "../styles/ExperienceForm.css";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="experience-title">Experience</div>
        <div id="add-btn-container">
          <button id="add-btn" onClick={() => this.props.handleClick()}>Add Experience</button>
        </div>
      </>
    );
  }
}

export default ExperienceForm;
