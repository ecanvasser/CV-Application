import { Component } from "react";
import Preview from "./Preview";
import "../styles/Document.css";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      education: {
        location: "",
        school: "",
        degree: "",
        duration: "",
      },
    };

    this.nameChange = this.nameChange.bind(this);
  }

  nameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    if (this.props.preview === false) {
      return (
        <div id="document">
          <form id="name">
            <input
              type="text"
              placeholder="Name"
              onChange={this.nameChange}
              value={this.state.name}
            />
          </form>
          <form id="contact">
            <input
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
            <input
              id="phone"
              type="phone"
              placeholder="Phone"
              onChange={(e) => this.setState({ phone: e.target.value })}
              value={this.state.phone}
            />
            <input
              id="location"
              type="text"
              placeholder="City, State"
              onChange={(e) => this.setState({ location: e.target.value })}
              value={this.state.location}
            />
          </form>
          <div id="edu-title">Education</div>
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
