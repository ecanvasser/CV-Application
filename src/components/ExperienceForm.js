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
      this.setState({ ...this.state, jobSummCount: count + 1 });
    }
  };

  handleInput = (e) => {
    let value = e.target.value;
    this.setState({ ...this.state, [e.target.name]: value });
    this.props.handleChange({...this.state});
  };

  handleTasks = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    this.setState({ tasks: {...this.state.tasks, [id]: value} });

    this.props.handleChange();
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
              id={this.props.id}
              placeholder="Company"
              onChange={this.props.handleChange}
            />
            <input
              name="title"
              id={this.props.id}
              placeholder="Job Title"
              onChange={this.props.handleChange}
            />
            <input
              name="location"
              id={this.props.id}
              placeholder="Location"
              onChange={this.props.handleChange}
            />
            <input
              name="dates"
              id={this.props.id}
              placeholder="Start & End Date"
              onChange={this.props.handleChange}
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
