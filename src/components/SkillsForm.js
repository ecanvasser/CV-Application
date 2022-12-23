import { Component } from "react";
import '../styles/SkillsForm.css'

class SkillsForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="skills-title-edit">Skills</div>
        <form id="skills-form">
          <textarea 
            name="skills" 
            onChange={this.props.handleChange} 
            value={this.props.skills}
            placeholder="Skill1,skill2,skill3, etc"
          />
        </form>
      </>
    );
  }
}

export default SkillsForm;
