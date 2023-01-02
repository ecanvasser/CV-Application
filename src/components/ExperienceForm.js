import { Component } from "react";
import "../styles/ExperienceForm.css";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobSummCount: 1,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    let count = this.state.jobSummCount;
    if (count < 3) {
      this.setState({ ...this.state, jobSummCount: count + 1 });
    }
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div id="exp-form">
          <form id="form" onSubmit={this.handleSubmit}>
            <input
              name="company"
              id={this.props.id}
              placeholder="Company"
              onChange={this.props.handleExp}
            />
            <input
              name="title"
              id={this.props.id}
              placeholder="Job Title"
              onChange={this.props.handleExp}
            />
            <input
              name="location"
              id={this.props.id}
              placeholder="Location"
              onChange={this.props.handleExp}
            />
            <input
              name="dates"
              id={this.props.id}
              placeholder="Start & End Date"
              onChange={this.props.handleExp}
            />
            {[...Array(this.state.jobSummCount)].map((e, i) => {
              return (
                <input
                  key={i}
                  id={this.props.id}
                  name={i}
                  placeholder="Accomplishment/Task"
                  onChange={this.props.handleExpTasks}
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
