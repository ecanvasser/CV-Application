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

  handleSubmit = () => {
    let count = this.state.jobSummCount;

    if (count < 3) {
      this.setState({ ...this.state, ["jobSummCount"]: count + 1 });
    }
  };

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
            <input placeholder="Company" />
            <input placeholder="Job Title" />
            <input placeholder="Location" />
            <input placeholder="Start & End Date" />
            {[...Array(this.state.jobSummCount)].map((e) => {
                return <input placeholder="Accomplishment/Task" />
            })}
            <input type="submit" hidden />
          </form>
        </div>
      </>
    );
  }
}

export default ExperienceForm;
