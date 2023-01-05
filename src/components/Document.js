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
        taskCount: { 0: 1, 1: 1, 2: 1 },
        inputs: {},
      },
    };

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
    this.handleCount = this.handleCount.bind(this);
    this.handleExp = this.handleExp.bind(this);
    this.handleExpTasks = this.handleExpTasks.bind(this);
    this.handleTaskCount = this.handleTaskCount.bind(this);
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
      experience: { ...this.state.experience, count: count + 1 },
    });
  }

  handleExp(e) {
    let value = e.target.value;
    let i = parseInt(e.target.id);
    this.setState({
      experience: {
        ...this.state.experience,
        inputs: {
          ...this.state.experience.inputs,
          [i]: Object.assign({}, this.state.experience.inputs[i], {
            [e.target.name]: value,
          }),
        },
      },
    });
  }

  handleExpTasks(e) {
    let value = e.target.value || "";
    let i = e.target.id;
    this.setState({
      experience: {
        ...this.state.experience,
        inputs: {
          ...this.state.experience.inputs,
          [i]: {
            ...this.state.experience.inputs[i],
            tasks: Object.assign({}, this.state.experience.inputs[i].tasks, {
              [e.target.name]: value,
            }),
          },
        },
      },
    });
  }

  handleTaskCount(i, e) {
    let count = parseInt(this.state.experience.taskCount[i]);
    if (count < 3) {
      this.setState({
        experience: {
          ...this.state.experience,
          taskCount: Object.assign({}, this.state.experience.taskCount, {
            [i]: count + 1,
          }),
        },
      });
    }
    e.preventDefault();
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
            handleExp={this.handleExp}
            handleExpTasks={this.handleExpTasks}
            handleTaskCount={this.handleTaskCount}
            count={this.state.experience.count}
            taskCount={this.state.experience.taskCount}
            inputs={this.state.experience.inputs}
          />
        </div>
      );
    }
    return (
      <>
        <Preview data={this.state} />
      </>
    );
  }
}

export default Document;
