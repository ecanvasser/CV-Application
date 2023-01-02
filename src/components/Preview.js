import { Component } from "react";
import "../styles/Preview.css";
import ExperiencePreview from "./ExperiencePreview";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.renderSkills = this.renderSkills.bind(this);
  }

  renderSkills() {
    let skills = this.props.data.skills;
    skills.map((skill) => {
      return <div className="skill-block">{skill}</div>;
    });
  }

  render() {
    return (
      <div id="preview">
        <div id="name-prev">{this.props.data.name}</div>
        <div id="role">{this.props.data.role}</div>
        <div id="divider"></div>
        <div id="contact-prev">
          <div id="email">{this.props.data.email}</div>
          <div id="phone">{this.props.data.phone}</div>
          <div id="location">{this.props.data.location}</div>
        </div>
        <div id="divider"></div>
        <div id="edu-skills">
          <div id="edu-half">
            <div id="edu-title">Education</div>
            <div id="edu-details">
              <div id="school">{this.props.data.education.school}</div>
              <div id="degree">{this.props.data.education.degree}</div>
              <div id="startend">{this.props.data.education.duration}</div>
            </div>
          </div>
          <div id="skill-half">
            <div id="skills-title">Skills</div>
            <div id="skill-list">
              {this.props.data.skills.map((skill) => {
                return <div className="skill-block">{skill}</div>;
              })}
            </div>
          </div>
        </div>
        <div id="divider"></div>
        <div id="exp-title">Experience</div>
        {Array.from(Object.values(this.props.data.experience.inputs)).map(
          (e) => {
            return <ExperiencePreview 
            company={e["company"]} 
            dates={e["dates"]}
            location={e["location"]}
            title={e["title"]}
            tasks={e["tasks"]}
            />;
          }
        )}
      </div>
    );
  }
}

export default Preview;
