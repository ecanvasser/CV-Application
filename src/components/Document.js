import { Component } from "react";
import Preview from "./Preview";
import GeneralForm from "./GeneralForm";
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ ...this.state, [e.target.name]: value });
  }

  render() {
    if (this.props.preview === false) {
      return (
        <div id="document">
          <GeneralForm 
            handleChange={this.handleChange}
            name={this.state.name}
            role={this.state.role}
            email={this.state.email}
            phone={this.state.phone}
            location={this.state.location}
          />
          <div id="edu-title-edit">Education</div>
          <form id="education">
            <input
              id="school"
              type="text"
              placeholder="Organization"
              onChange={(e) =>
                this.setState({
                  education: {
                    ...this.state.education,
                    school: e.target.value,
                  },
                })
              }
              value={this.state.education.school}
            />
            <input
              id="degree"
              type="text"
              placeholder="Degree/Major"
              onChange={(e) =>
                this.setState({
                  education: {
                    ...this.state.education,
                    degree: e.target.value,
                  },
                })
              }
              value={this.state.education.degree}
            />
            <input
              id="startend"
              type="text"
              placeholder="Start year - End Year"
              onChange={(e) =>
                this.setState({
                  education: {
                    ...this.state.education,
                    duration: e.target.value,
                  },
                })
              }
              value={this.state.education.duration}
            />
          </form>
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
