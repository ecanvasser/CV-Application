import { Component } from "react";
import Preview from "./Preview";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import ExperienceForm from "./ExperienceForm";
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
        row1: {
          employer: "",
          role: "",
        },
      },
    };

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
    this.handleExperienceClick = this.handleExperienceClick.bind(this);
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

  handleExperienceClick() {
    let count = parseInt(this.state.experience.count);
    if (count === 3) {
      return
    }
    this.setState({
        experience: { ...this.state.experience, ["count"]: count+1 },
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
          <ExperienceForm 
            handleClick={this.handleExperienceClick}
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
