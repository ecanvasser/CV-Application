import { Component } from "react";
import "../styles/ExperienceForm.css";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobSummCount: 1,
      company: "",
      title: "",
      location: "",
      dates: "",
      tasks: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTasks = this.handleTasks.bind(this);
  }

  handleSubmit = () => {
    let count = this.state.jobSummCount;

    if (count < 3) {
      this.setState({ ...this.state, ["jobSummCount"]: count + 1 });
    }
  };

  handleInput = (e) => {
    let value = e.target.value;
    this.setState({ ...this.state, [e.target.name]: value });
  };

  handleTasks = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    
    this.setState({ tasks: {...this.state.tasks, [id]: value} });
  }

  render() {
    return (
      <>
        <div id="exp-form">
          <form
            id="form"
            onSubmit={(e) => {
              this.handleSubmit();
              e.preventDefault();
            }}
          >
            <input
              name="company"
              placeholder="Company"
              onChange={this.handleInput}
            />
            <input
              name="title"
              placeholder="Job Title"
              onChange={this.handleInput}
            />
            <input
              name="location"
              placeholder="Location"
              onChange={this.handleInput}
            />
            <input
              name="dates"
              placeholder="Start & End Date"
              onChange={this.handleInput}
            />
            {[...Array(this.state.jobSummCount)].map((e, i) => {
              return (
                <input
                  key={i}
                  id={i}
                  name="tasks"
                  placeholder="Accomplishment/Task"
                  onChange={this.handleTasks}
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
