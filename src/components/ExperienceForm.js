import { Component } from "react";
import '../styles/ExperienceForm.css'

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="experience-title">Experience</div>
        <div id="add-btn-container">
            <button id="add-btn">Add Experience</button>
        </div>
      </>
    );
  }
}

export default ExperienceForm
