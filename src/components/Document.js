import { Component } from "react";
import Preview from "./Preview";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
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
    };

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
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
