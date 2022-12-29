import { Component } from "react";
import '../styles/ExperienceForm.css'

class ExperienceForm extends Component {
  render() {
    return (
      <>
        <div id="exp-form">
          <form>
            <input placeholder="Company" />
            <input placeholder="Job Title" />
            <input placeholder="Location" />
            <input placeholder="Start & End Date"/>
            <input placeholder="Job Summary" />
          </form>
        </div>
      </>
    );
  }
}

export default ExperienceForm;
