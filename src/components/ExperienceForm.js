import "../styles/ExperienceForm.css";

const ExperienceForm = (props) => {
  return (
    <>
      <div className="exp-form">
        <form
          className="form"
          onSubmit={(e) => {
            props.handleTaskCount(props.id, e);
          }}
        >
          <input
            name="company"
            className="company"
            id={props.id}
            placeholder="Company"
            onChange={props.handleExp}
            // value={props.inputs.company || ""}
          />
          <input
            name="title"
            className="title"
            id={props.id}
            placeholder="Job Title"
            onChange={props.handleExp}
            // value={props.inputs["title"] || ""}
          />
          <input
            name="location"
            className="location"
            id={props.id}
            placeholder="Location"
            onChange={props.handleExp}
            // value={props.inputs["location"] || ""}
          />
          <input
            name="dates"
            className="dates"
            id={props.id}
            placeholder="Start & End Date"
            onChange={props.handleExp}
            // value={props.inputs["dates"] || ""}
          />
          {[...Array(props.taskCount)].map((e, i) => {
            return (
              <input
                key={i}
                id={props.id}
                name={i}
                className="job-task"
                placeholder="Accomplishment/Task"
                onChange={props.handleExpTasks}
                // value={
                //   props.inputs.tasks ? props.inputs.tasks[i] : ""
                // }
              />
            );
          })}
          <input type="submit" hidden />
        </form>
      </div>
    </>
  );
}

export default ExperienceForm;
