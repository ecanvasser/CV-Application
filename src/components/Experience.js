import { Component } from "react";
import "../styles/Experience.css";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="experience-title">Experience</div>
        <div id="dynamic-form">
          {[...Array(this.props.count)].map((e) => {
            if (e !== 0) {
              return <div>true</div>
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