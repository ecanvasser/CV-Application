import { Component } from "react";
import "../styles/ExperiencePreview.css";

class ExperiencePreview extends Component {
  render() {
    return (
      <div className="prevExp-block">
        <div className="top-row">
            <div className="company-name">{this.props.company}</div>
            <div className="job-length">{this.props.dates}</div>
        </div>
        <div className="job-title">{this.props.title}</div> 
        <div className="job-location">{this.props.location}</div>
        {(Array.from(Object.values(this.props.tasks))).map((e) => {
            return <div className="job-task"><div className="task-dash">-</div>{e}</div>
        })}
      </div>
    );
  }
}

export default ExperiencePreview;
