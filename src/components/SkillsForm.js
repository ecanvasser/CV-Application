import { Component } from "react";

class SkillsForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="skills-title-edit">Skills</div>
        <form id="skills-form">
          <textarea name="skills" onChange={this.props.handleChange}></textarea>
        </form>
      </>
    );
  }
}

export default SkillsForm
