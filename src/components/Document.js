import { Component } from "react";
import Preview from "./Preview";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import Experience from "./Experience";
import "../styles/Document.css";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      role: "",
      email: "",
      phone: "",
      location: "",
      education: {
        school: "",
        degree: "",
        duration: "",
      },
      skills: "",
      experience: {
        count: 0,
        inputs: [],
      },
    };

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
    this.handleCount = this.handleCount.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
  }

  handleGeneralChange(e) {
    const value = e.target.value;
    this.setState({ ...this.state, [e.target.name]: value });
  }

  handleEducationChange(e) {
    const value = e.target.value;
    this.setState({
      education: {
        ...this.state.education,
        [e.target.name]: value,
      },
    });
  }

  handleSkillsChange(e) {
    const value = e.target.value;
    this.setState({ ...this.state, [e.target.name]: value.split(",") });
  }

  handleCount() {
    let count = parseInt(this.state.experience.count);
    if (count === 3) {
      return;
    }
    this.setState({
      experience: { ...this.state.experience, ["count"]: count + 1 },
    });
  }

  handleExperience(obj) {
    let inputArr = this.state.experience.inputs;
    this.setState({
      inputs: { ...this.state.experience, ["inputs"]: inputArr.concat(obj) },
    });
  }

  render() {
    if (this.props.preview === false) {
      return (
        <div id="document">
          <GeneralForm
            handleChange={this.handleGeneralChange}
            name={this.state.name}
            role={this.state.role}
            email={this.state.email}
            phone={this.state.phone}
            location={this.state.location}
          />
          <EducationForm
            handleChange={this.handleEducationChange}
            school={this.state.education.school}
            degree={this.state.education.degree}
            duration={this.state.education.duration}
          />
          <SkillsForm
            handleChange={this.handleSkillsChange}
            skills={this.state.skills}
          />
          <Experience
            handleClick={this.handleCount}
            handleChange={this.handleExperience}
            count={this.state.experience.count}
          />
        </div>
      );
    }
    return (
      <div id="document">
        <Preview data={this.state} />
      </div>
    );
  }
}

export default Document;
