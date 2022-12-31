import { Component } from "react";
import ExperienceForm from "./ExperienceForm";
import "../styles/Experience.css";

class Experience extends Component {
  render() {
    return (
      <>
        <div id="experience-title">Experience</div>
        <div id="dynamic-form">
          {[...Array(this.props.count)].map((e, i) => {
            if (e !== 0) {
              return (
                <ExperienceForm
                  key={i}
                  id={i}
                  handleExp={this.props.handleExp}
                  handleExpTasks={this.props.handleExpTasks}
                />
              );
            }
          })}
        </div>
        <div id="add-btn-container">
          <button id="add-btn" onClick={() => this.props.handleClick()}>
            Add Experience
          </button>
        </div>
      </>
    );
  }
}

export default Experience;
