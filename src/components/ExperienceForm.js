import { Component } from "react";
import "../styles/ExperienceForm.css";

class ExperienceForm extends Component {
  render() {
    return (
      <>
        <div id="exp-form">
          <form id="form" onSubmit={(e) => {this.props.handleTaskCount(this.props.id, e)}}>
            <input
              name="company"
              id={this.props.id}
              placeholder="Company"
              onChange={this.props.handleExp}
              value={this.props.inputs["company"] || ""}
            />
            <input
              name="title"
              id={this.props.id}
              placeholder="Job Title"
              onChange={this.props.handleExp}
              value={this.props.inputs["title"] || ""}
            />
            <input
              name="location"
              id={this.props.id}
              placeholder="Location"
              onChange={this.props.handleExp}
              value={this.props.inputs["location"] || ""}
            />
            <input
              name="dates"
              id={this.props.id}
              placeholder="Start & End Date"
              onChange={this.props.handleExp}
              value={this.props.inputs["dates"] || ""}
            />
            {[...Array(this.props.taskCount)].map((e, i) => {
              return (
                <input
                  key={i}
                  id={this.props.id}
                  name={i}
                  placeholder="Accomplishment/Task"
                  onChange={this.props.handleExpTasks}
                  value={
                    this.props.inputs.tasks ? this.props.inputs.tasks[i] : ""
                  }
                />
              );
            })}
            <input type="submit" hidden />
          </form>
        </div>
      </>
    );
  }
}

export default ExperienceForm;
