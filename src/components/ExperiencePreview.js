import { Component } from "react";
import "../styles/ExperiencePreview.css";

class ExperiencePreview extends Component {
  render() {
    return (
      <>
        <div className="company-name">{this.props.company}</div>
        <div>{this.props.dates}</div>
        <div>{this.props.location}</div>
        <div>{this.props.title}</div>
        {(Array.from(Object.values(this.props.tasks))).map((e) => {
            return <div>{e}</div>
        })}
      </>
    );
  }
}

export default ExperiencePreview;
